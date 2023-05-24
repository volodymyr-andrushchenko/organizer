import type { Layout } from 'react-grid-layout'

export type TodoItem = {
  id: string
  text: string
}

export type TodoItemId = TodoItem['id']

// I save layout as a whole because adding element can push neighbouring notes
export type PostNoteData = { layout: Layout[]; todo: TodoItem }

export type DropItem =
  | {
      i: string
      w: number
      h: number
    }
  | undefined
