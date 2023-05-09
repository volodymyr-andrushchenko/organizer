import { useState, useEffect } from 'react'
import type { TodoItem } from '../modules/todo/components/todo/Todo.interface'

export function useFetchTodos(): [
  TodoItem[],
  React.Dispatch<React.SetStateAction<TodoItem[]>>
] {
  const [todos, setTodos] = useState<TodoItem[]>([])

  useEffect(() => {
    fetch('api/todos')
      .then(async (res) => {
        if (res.ok) {
          const { todos } = (await res.json()) as { todos: TodoItem[] }
          setTodos(todos)
        }
      })
      .catch((err: unknown) => {
        console.error(err)
      })
  }, [])

  return [todos, setTodos]
}
