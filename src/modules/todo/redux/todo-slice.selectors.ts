import { RootState } from '@/store'
import type { TodoItemId } from '../types/todo.types'

export const selectIsTodoMarkedForDeletion =
  (id: TodoItemId) => (state: RootState) =>
    state.todo.todosMarkedForDeletion.includes(id)

export const selectTodosMarkedForDeletion = (state: RootState) =>
  state.todo.todosMarkedForDeletion
