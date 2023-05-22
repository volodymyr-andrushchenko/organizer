import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { TodoItemId } from '../types/todo.types'

interface TodoState {
  todosMarkedForDeletion: TodoItemId[]
}

const initialState: TodoState = {
  todosMarkedForDeletion: [],
}

const todosSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    markForDeletion(state, action: PayloadAction<TodoItemId>) {
      const { payload: todoId } = action

      if (!state.todosMarkedForDeletion.includes(todoId)) {
        state.todosMarkedForDeletion.push(todoId)
      }
    },

    clearMarkedForDeletion(state, action: PayloadAction<TodoItemId>) {
      const { payload: todoIdMarkedForDeletion } = action

      state.todosMarkedForDeletion = state.todosMarkedForDeletion.filter(
        (storedId) => todoIdMarkedForDeletion !== storedId
      )
    },

    clearAllMarkedForDeletion(state) {
      state.todosMarkedForDeletion = []
    },
  },
})

export const {
  markForDeletion,
  clearMarkedForDeletion,
  clearAllMarkedForDeletion,
} = todosSlice.actions

export default todosSlice.reducer
