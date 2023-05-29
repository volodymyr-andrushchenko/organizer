import type { TodoItem } from '@/modules/todo/types/todo.types'
import type { Layout } from 'react-grid-layout'
import axios from 'axios'

export const TodoApiService = {
  retrieve: async (): Promise<TodoItem[]> =>
    fetch('api/todos')
      .then((res) => res.json() as Promise<{ todos: TodoItem[] }>)
      .then((res) => res.todos),

  create: (data: TodoItem) =>
    fetch('/api/todos', { method: 'POST', body: JSON.stringify(data) }),
} as const

export const TodoLayoutApiService = {
  retrive: () =>
    axios
      .get<{ layouts: Layout[] }>('api/layouts')
      .then(({ data }) => data.layouts),
  create: (layout: Layout[]) =>
    axios.post<Layout[]>('api/layouts', layout).then(({ data }) => data),
}
