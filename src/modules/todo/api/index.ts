import { Layout } from 'react-grid-layout'
import type { TodoItem } from '@/modules/todo/types/todo.types'
import axios from 'axios'

type PostTodoData = Omit<TodoItem, 'id'>

const LAYOUT_KEY = 'layout'

const saveToLS = (data: Layout[]) => {
  localStorage.setItem(LAYOUT_KEY, JSON.stringify(data))
}

const getFromLs = (): Layout[] | undefined => {
  const storedLayout = localStorage.getItem(LAYOUT_KEY)

  if (storedLayout) {
    return JSON.parse(storedLayout) as Layout[]
  }
}

export const TodoApiService = {
  retrieve: async (): Promise<TodoItem[]> =>
    fetch('api/todos')
      .then((res) => res.json() as Promise<{ todos: TodoItem[] }>)
      .then((res) => res.todos),

  create: (data: PostTodoData) =>
    fetch('/api/todos', { method: 'POST', body: JSON.stringify(data) }),
  saveLayout: (data: Layout[]) => saveToLS(data),
  getLayout: () => getFromLs(),
} as const
