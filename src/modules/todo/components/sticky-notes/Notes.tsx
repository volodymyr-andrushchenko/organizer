import 'react-grid-layout/css/styles.css'
import 'react-resizable/css/styles.css'
import GridLayout from 'react-grid-layout'
import type { Layout } from 'react-grid-layout'
import { useState } from 'react'
import Draggable from './components/draggable/Draggable'
import {
  useFetchTodos,
  FETCH_TODO_LIST_QUERY_KEY,
} from '../../hooks/useFetchTodos'
import * as classes from './Notes.module.scss'
import {
  useFetchTodoLayouts,
  FETCH_TODO_LAYOUTS_QUERY_KEY,
} from '../../hooks/useFetchLayouts'
import { useSaveLayout } from '../../hooks/useSaveLayout'
import { v4 as uuid } from 'uuid'
import { TodoItem } from '../../types/todo.types'
import { useQueryClient, useMutation } from '@tanstack/react-query'
import { TodoLayoutApiService, TodoApiService } from '../../api'

type PostNoteData = { layout: Layout[]; todo: TodoItem }

const GRID_WIDTH = 600
const GRID_COLUMNS = 6
const GRID_ROW_HEIGHT = 100

export default function Notes() {
  const queryClient = useQueryClient()

  const [newTodoText, setNewTodoText] = useState<string>('')

  const todos = useFetchTodos()

  const todoLayouts = useFetchTodoLayouts()

  const { mutate: saveLayout } = useSaveLayout()

  // I save layout as a whole because adding element can push neighbouring notes
  const addNote = useMutation({
    mutationFn: ({ layout, todo }: PostNoteData) => {
      return Promise.all([
        TodoLayoutApiService.create(layout),
        TodoApiService.create(todo),
      ])
    },
    onMutate: async (data: PostNoteData) => {
      setNewTodoText('')

      await queryClient.cancelQueries()

      const previousTodos = queryClient.getQueryData<TodoItem[]>([
        FETCH_TODO_LIST_QUERY_KEY,
      ])

      if (previousTodos) {
        queryClient.setQueryData<TodoItem[]>(
          [FETCH_TODO_LIST_QUERY_KEY],
          [...previousTodos, data.todo]
        )
      } else {
        queryClient.setQueryData<TodoItem[]>(
          [FETCH_TODO_LIST_QUERY_KEY],
          [data.todo]
        )
      }

      queryClient.setQueriesData<Layout[]>(
        [FETCH_TODO_LAYOUTS_QUERY_KEY],
        data.layout
      )
    },
    onSettled: () => {
      queryClient.invalidateQueries().catch((err) => console.error(err))
    },
  })

  function onDrop(layout: Layout[]) {
    if (!todos.data) {
      return
    }

    // create todo
    const todo: TodoItem = { id: uuid(), text: newTodoText }

    //update layout with correct todo id
    const tempLayoutItemIndex = layout.findIndex(
      (layoutItem) => !todos.data.find((todo) => todo.id === layoutItem.i)
    )

    if (tempLayoutItemIndex === -1) {
      throw new Error('no temp item on drop')
    }

    // don't forget this
    layout[tempLayoutItemIndex].i = todo.id

    addNote.mutate({ layout, todo: todo })
  }

  function onDragStart(text: string) {
    setNewTodoText(text)
  }

  function onLayoutChange(layout: Layout[]) {
    if (!todos.data) {
      return
    }

    const notTemporaryItems = layout.filter(
      (item) => !!todos.data.find((todo: TodoItem) => todo.id === item.i)
    )

    saveLayout(notTemporaryItems)
  }

  const isAllDataIsFetched = todos.data && todoLayouts.data

  return (
    <div style={{ marginTop: 20 }}>
      <Draggable onDragStart={onDragStart} />
      {isAllDataIsFetched && (
        <GridLayout
          className="layout"
          style={{ border: '1px solid black', width: GRID_WIDTH }}
          layout={todoLayouts.data}
          cols={GRID_COLUMNS}
          rowHeight={GRID_ROW_HEIGHT}
          width={GRID_WIDTH}
          isDroppable={true}
          onDrop={onDrop}
          isResizable={false}
          onLayoutChange={onLayoutChange}
          droppingItem={{ w: 1, h: 1, i: `${new Date().getTime()}` }}
        >
          {todoLayouts.data.map((item) => (
            <div className={classes.gridItem} key={item.i}>
              {todos.data?.find((todo) => todo.id === item.i)?.text}
            </div>
          ))}
        </GridLayout>
      )}
    </div>
  )
}
