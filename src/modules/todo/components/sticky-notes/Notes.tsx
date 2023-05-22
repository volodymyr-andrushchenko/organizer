import 'react-grid-layout/css/styles.css'
import 'react-resizable/css/styles.css'
import GridLayout from 'react-grid-layout'
import type { Layout } from 'react-grid-layout'
import { useEffect, useRef, useState } from 'react'
import { useCreateTodo } from '@/modules/todo/hooks/useMutationToPostTodo'
import Draggable from './components/draggable/Draggable'
import { useFetchTodos } from '../../hooks/useFetchTodos'
import { TodoApiService } from '../../api'
import * as classes from './Notes.module.scss'
import { TodoItem } from '../../types/todo.types'

const GRID_WIDTH = 600
const GRID_COLUMNS = 6
const GRID_ROW_HEIGHT = 100

export type LayoutWithData = Layout & {
  text: string
}

function combineTodoItemsWithLayouts(
  layouts: Layout[],
  todos: TodoItem[],
  addElementsWithoutLayout = false
): LayoutWithData[] {
  return todos.reduce<LayoutWithData[]>((prev, todoItem) => {
    // look for todo among layout items
    const layoutMatchingToTodoItem = layouts.find(
      (savedLayout) => savedLayout.i === todoItem.id
    )

    // if it exists return it
    if (layoutMatchingToTodoItem) {
      return [...prev, { ...layoutMatchingToTodoItem, text: todoItem.text }]
    }

    // if addElementsWithoutLayout put them at the end else skip
    return addElementsWithoutLayout
      ? [
          ...prev,
          {
            i: todoItem.id,
            x: 0, // this is how i put it at the end
            y: Infinity,
            w: 1,
            h: 1,
            text: todoItem.text,
          },
        ]
      : [...prev]
  }, [])
}

const tempIdData: { id: string | null; text: string | null } = {
  id: null,
  text: null,
}

export default function Notes() {
  const [newTodoText, setNewTodoText] = useState<string | null>(null)

  const todos = useFetchTodos()

  const [layout, setLayout] = useState<LayoutWithData[]>([])

  const { mutate: todoCreate } = useCreateTodo()

  const temporaryIdDataRef = useRef(tempIdData)

  // combine downloaded data about todos with data about about layout from local storage
  useEffect(() => {
    // data of course
    if (todos.data) {
      // check if anything is saved
      const savedLayout = TodoApiService.getLayout() ?? []

      // if optimistic ui happened i need to update
      if (temporaryIdDataRef.current.id) {
        const itemWithTempIdThatWasSavedInLS = savedLayout.find(
          (item) => item.i === temporaryIdDataRef.current.id
        )

        const todoWithSameTextFromServer = todos.data.find(
          (item) => item.text === temporaryIdDataRef.current.text
        )

        // having same text as basis for comparison is error prone
        if (itemWithTempIdThatWasSavedInLS && todoWithSameTextFromServer) {
          // update temp id
          itemWithTempIdThatWasSavedInLS.i = todoWithSameTextFromServer.id
        }

        // since i no langer need temp data i clear it and update local storage
        TodoApiService.saveLayout(savedLayout)
        temporaryIdDataRef.current.id = null
        temporaryIdDataRef.current.text = null
      }

      const newLayout = combineTodoItemsWithLayouts(
        savedLayout,
        todos.data,
        true
      )

      setLayout(newLayout)
    }
  }, [todos.data])

  function onDrop(layout: Layout[], item: Layout) {
    // rearrendged items because dropping items make neighbour elements shift
    if (todos.data && newTodoText) {
      const rearrendgedLayout = combineTodoItemsWithLayouts(layout, todos.data)

      const newLayoutItem: LayoutWithData = {
        ...item,
        text: newTodoText ?? '',
      }

      temporaryIdDataRef.current = { id: item.i, text: newTodoText }

      // I need to save passed layout as well so no prev unfortunately
      const newLayout = [...rearrendgedLayout, newLayoutItem]
      setLayout(newLayout)
      TodoApiService.saveLayout(newLayout)

      todoCreate({
        text: newTodoText,
      })
    } else {
      throw new Error('onDrop event triggered before todo.data was loaded')
    }
  }

  function onDragStart(text: string) {
    setNewTodoText(text)
  }

  function onDragEnd() {
    setNewTodoText(null)
  }

  function saveLayout() {
    setLayout(layout)
  }

  function onLayoutChange(layout: Layout[]) {
    TodoApiService.saveLayout(layout)
  }

  return (
    <div style={{ marginTop: 20 }}>
      <Draggable onDragStart={onDragStart} onDragEnd={onDragEnd} />
      {todos.data && (
        <GridLayout
          className="layout"
          style={{ border: '1px solid black', width: GRID_WIDTH }}
          layout={layout}
          cols={GRID_COLUMNS}
          rowHeight={GRID_ROW_HEIGHT}
          width={GRID_WIDTH}
          isDroppable={true}
          onDrop={onDrop}
          isResizable={false}
          onLayoutChange={onLayoutChange}
          droppingItem={{ w: 1, h: 1, i: `${new Date().getTime()}` }}
        >
          {layout.map((item) => (
            <div className={classes.gridItem} key={item.i}>
              {item.text}
            </div>
          ))}
        </GridLayout>
      )}
      <button onClick={saveLayout}>save</button>
      <div style={{ marginTop: 20 }}>
        Text of todo that will be added: {newTodoText}
      </div>
    </div>
  )
}
