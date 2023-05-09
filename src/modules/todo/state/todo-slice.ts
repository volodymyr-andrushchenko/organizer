import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../../store'
import type TodoItem from '../types/Todo.interface'

interface TodoState {
  todos: Record<string, TodoItem>
}

const initialState: TodoState = {
  todos: {},
}

const cartSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<TodoItem>) {
      const { payload: newTodo } = action

      state.todos[newTodo.id] = newTodo
    },
    deleteTodo(state, action: PayloadAction<{ id: string }>) {
      const idToDelete = action.payload.id

      delete state.todos[idToDelete]
    },
  },
})

export const { addTodo, deleteTodo } = cartSlice.actions

export const selectTodosItems = (state: RootState) => state.todo.todos

export default cartSlice.reducer
