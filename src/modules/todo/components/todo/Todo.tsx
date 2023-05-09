import type { TodoItem } from './Todo.interface'
import { useForm } from 'react-hook-form'
import { useFetchTodos } from '../../../../hooks/useFetchTodos'
import * as classes from './Todo.module.scss'

type AddTodoFormValues = {
  text: string
}

function Todo() {
  const [todos, setTodos] = useFetchTodos()

  const { register, handleSubmit, reset } = useForm<AddTodoFormValues>()

  const onSubmit = handleSubmit((data) => {
    fetch('/api/todos', { method: 'POST', body: JSON.stringify(data) })
      .then(async (res) => {
        const { todo } = (await res.json()) as { todo: TodoItem }
        setTodos((prev) => [...prev, todo])
        reset()
      })
      .catch((err) => {
        console.error(err)
      })
  })

  return (
    <div>
      <h1 className={classes.root}>Todo list</h1>
      <ul>
        {todos.map((todo) => {
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
    </div>
  )
}

export default Todo
