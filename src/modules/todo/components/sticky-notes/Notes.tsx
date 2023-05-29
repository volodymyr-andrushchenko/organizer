import 'react-grid-layout/css/styles.css'
import 'react-resizable/css/styles.css'
import GridLayout from 'react-grid-layout'
import type { Layout } from 'react-grid-layout'
import { useState } from 'react'
import Draggable from './components/draggable/Draggable'
import { useFetchTodos } from '../../hooks/useFetchTodos'
import * as classes from './Notes.module.scss'
import { useFetchTodoLayouts } from '../../hooks/useFetchLayouts'
import { useSaveLayout } from '../../hooks/useSaveLayout'
import { v4 as uuid } from 'uuid'
import useAddNote from '../../hooks/useAddNote'
import type { DropItem } from '@/modules/todo/types/todo.types'

const GRID_WIDTH = 600
const GRID_COLUMNS = 6
const GRID_ROW_HEIGHT = 100

export default function Notes() {
  const [newTodoText, setNewTodoText] = useState<string>('')

  const todos = useFetchTodos()

  const todoLayouts = useFetchTodoLayouts()

  const { mutate: saveLayout } = useSaveLayout()

  const [droppingItem, setDroppintItem] = useState<DropItem>()

  const { mutate: addNote } = useAddNote()

  function onDrop(layout: Layout[], layoutItem: Layout) {
    setNewTodoText('')
    setDroppintItem(undefined)
    addNote({ layout, todo: { id: layoutItem.i, text: newTodoText } })
  }

  function onDragStart(text: string) {
    setNewTodoText(text)
    setDroppintItem({ i: uuid(), w: 1, h: 1 })
  }

  function onLayoutChange(layout: Layout[]) {
    saveLayout(layout)
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
          droppingItem={droppingItem}
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
