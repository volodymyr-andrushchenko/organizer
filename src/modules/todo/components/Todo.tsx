import { createServer } from 'miragejs'
import type { TodoItem } from '../types/TodoItem'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useFetchTodos } from '../hooks/useFetchTodos'

// mirage logic
createServer({
  routes() {
    this.get('/api/todos', (): TodoItem[] => [
      { id: '1', text: 'lol' },
      { id: '2', text: 'foo' },
    ])
  },
})

type AddTodoFormValues = {
  todoMessage: string
}

function Todo() {
  const todos = useFetchTodos()

  const { register, handleSubmit, reset } = useForm<AddTodoFormValues>()

  const onSubmit = handleSubmit((data) => {
    console.log(data)
    reset()
  })

  return (
    <>
      <h1>Todo list</h1>
      <ul>
        {todos?.map((todo) => {
          return <li key={todo.id}>{todo.text}</li>
        })}
      </ul>
      <form onSubmit={onSubmit}>
        <label>
          Add New To-Do
          <br />
          <input type="text" {...register('todoMessage')} />
        </label>
        <input type="submit" value="Add To-Do" />
      </form>
    </>
  )
}

export default Todo
