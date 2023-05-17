import type { TodoItem } from '@/modules/todo/types/todo.types'

type PostTodoData = Omit<TodoItem, 'id'>

export const TodoApiService = {
  retrieve: async (): Promise<TodoItem[]> =>
    fetch('api/todos')
      .then((res) => res.json() as Promise<{ todos: TodoItem[] }>)
      .then((res) => res.todos),

  create: (data: PostTodoData) =>
    fetch('/api/todos', { method: 'POST', body: JSON.stringify(data) }),
} as const
