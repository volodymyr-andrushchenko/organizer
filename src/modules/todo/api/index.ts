import { TodoItem } from '../components/todo/Todo.interface'

export const fetchTodos = () => {
  return fetch('api/todos').then(async (res) => {
    const { todos } = (await res.json()) as { todos: TodoItem[] }
    return todos
  })
}

type PostTodoData = Omit<TodoItem, 'id'>

export const postTodo = (data: PostTodoData) => {
  return fetch('/api/todos', { method: 'POST', body: JSON.stringify(data) })
}
