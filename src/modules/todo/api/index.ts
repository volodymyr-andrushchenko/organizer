import { TodoItem } from '../components/todo/Todo.interface'

export const fetchTodos = () => {
  return fetch('api/todos').then(async (res) => {
    const { todos } = (await res.json()) as { todos: TodoItem[] }
    return todos
  })
}
