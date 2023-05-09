import { useForm } from 'react-hook-form'
import * as classes from './Todo.module.scss'
import { useMutationToPostTodo } from '../../hooks/useMutationToPostTodo'
import { useFetchTodos } from '../../hooks/useFetchTodos'

type AddTodoFormValues = {
  text: string
}

function Todo() {
  const { register, handleSubmit, reset } = useForm<AddTodoFormValues>()

  const todoList = useFetchTodos()

  const mutation = useMutationToPostTodo()

  const onSubmit = handleSubmit(({ text }) => {
    mutation.mutate({
      text,
    })

    reset()
  })

  return (
    <div>
      <h1 className={classes.root}>Todo list</h1>
      <ul>
        {todoList.isLoading && 'loading...'}
        {todoList.data?.map((todo) => {
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
