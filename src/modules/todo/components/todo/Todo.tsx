import { useForm } from 'react-hook-form'
import * as classes from './Todo.module.scss'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { TodoApiService } from '../../api'

type AddTodoFormValues = {
  text: string
}

function Todo() {
  const { register, handleSubmit, reset } = useForm<AddTodoFormValues>()

  const queryClient = useQueryClient()

  const { isLoading, data } = useQuery({
    queryKey: ['todos'],
    queryFn: TodoApiService.retrieve,
  })

  const mutation = useMutation({
    mutationFn: TodoApiService.create,
    onSuccess: () => {
      queryClient
        .invalidateQueries({ queryKey: ['todos'] })
        .catch((err: unknown) => {
          console.log(err)
        })
    },
  })

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
        {isLoading && 'loading...'}
        {data?.map((todo) => {
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
