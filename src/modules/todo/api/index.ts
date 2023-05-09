import { TodoItem } from '../components/todo/Todo.interface'

type PostTodoData = Omit<TodoItem, 'id'>

export const TodoApiService = {
  retrieve: async () => {
    const res = await fetch('api/todos')
    const { todos } = (await res.json()) as { todos: TodoItem[]} 
    return todos
  },

  create: (data: PostTodoData) => {
    return fetch('/api/todos', { method: 'POST', body: JSON.stringify(data) })
  }
} as const