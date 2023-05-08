import { createServer } from 'miragejs'
import type { TodoItem } from '../types/TodoItem'
import { useForm } from 'react-hook-form'
import { useFetchTodos } from '../hooks/useFetchTodos'

// mirage logic
createServer({
  routes() {
    this.get('/api/todos', (): TodoItem[] => [
      { id: '1', text: 'lol' },
      { id: '2', text: 'foo' },
    ])

    let newId = 3
    this.post('/api/todos', (schema, request): TodoItem => {
      // server assigns id so it get TodoItem without id
      const attrs = JSON.parse(request.requestBody) as Omit<TodoItem, 'id'>
      const id: string = (newId++).toString()
      return { ...attrs, id }
    })
  },
})

type AddTodoFormValues = {
  text: string
}

function Todo() {
  const todos = useFetchTodos()

  const { register, handleSubmit, reset } = useForm<AddTodoFormValues>()

  const onSubmit = handleSubmit((data) => {
    fetch('/api/todos', { method: 'POST', body: JSON.stringify(data) })
      .then(async (res) => {
        const json = (await res.json()) as TodoItem
        console.log(`res from Post id:${json.id} text:${json.text}`)
      })
      .catch((err) => {
        console.error(err)
      })
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
          <input type="text" {...register('text')} />
        </label>
        <input type="submit" value="Add To-Do" />
      </form>
    </>
  )
}

export default Todo
