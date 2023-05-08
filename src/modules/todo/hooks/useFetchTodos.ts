import { useState, useEffect } from 'react'
import type { TodoItem } from '../types/TodoItem'

export function useFetchTodos() {
  const [todos, setTodos] = useState<TodoItem[] | null>(null)

  useEffect(() => {
    fetch('api/todos')
      .then(async (res) => {
        if (res.ok) {
          const todos = (await res.json()) as TodoItem[]
          setTodos(todos)
        }
      })
      .catch((err: unknown) => {
        console.error(err)
      })
  }, [])

  return todos
}
