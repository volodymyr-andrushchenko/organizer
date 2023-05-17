import 'react-grid-layout/css/styles.css'
import 'react-resizable/css/styles.css'
import GridLayout from 'react-grid-layout'
import * as classes from './Notes.module.scss'
import type { Layout } from 'react-grid-layout'
import { useState } from 'react'
import { useCreateTodo } from '@/modules/todo/hooks/useMutationToPostTodo'
import Draggable from './components/draggable/Draggable'
import classNames from 'classnames'

const layout = [{ i: 'hint', x: 0, y: 0, w: 1, h: 1, static: true }]

export default function Notes() {
  const [newTodoText, setNewTodoText] = useState<string | null>(null)

  const { mutate: todoCreate } = useCreateTodo()

  function onDrop(layout: Layout[], item: Layout) {
    if (newTodoText) {
      todoCreate({
        text: newTodoText,
      })
    }
  }

  function onDragStart(text: string) {
    setNewTodoText(text)
  }

  function onDragEnd() {
    setNewTodoText(null)
  }

  return (
    <div style={{ marginTop: 20 }}>
      <Draggable onDragStart={onDragStart} onDragEnd={onDragEnd} />
      <GridLayout
        className={classNames(layout, classes.grid)}
        layout={layout}
        cols={2}
        rowHeight={300}
        width={600}
        isDroppable={true}
        onDrop={onDrop}
      >
        <div className={classes.hint} key="hint">
          <div className={classes.hintContent}>
            Plase drag new todo to the space on the right --&gt;
          </div>
        </div>
      </GridLayout>
      <div style={{ marginTop: 20 }}>
        Text of todo that will be added: {newTodoText}
      </div>
    </div>
  )
}
