import { useForm } from 'react-hook-form'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { selectTodosMarkedForDeletion } from '../../redux/todo-slice.selectors'
import { DELETE_TODOS_REQUESTED } from '../../redux/todo-slice.sagas.delete'

export default function DeleteMarkedTodos() {
  const { handleSubmit } = useForm()
  const dispatch = useAppDispatch()

  const todosMarkedForDeletion = useAppSelector(selectTodosMarkedForDeletion)

  // on submit I send info about deleted task to the task api, and I also inform mom api
  // this look kinda complex so try to use redux saga
  const onSubmit = handleSubmit(() => {
    dispatch({
      type: DELETE_TODOS_REQUESTED,
      payload: {
        todosMarkedForDeletion,
      },
    })
  })

  return (
    <form onSubmit={onSubmit}>
      <input type="submit" value="Delete" />
    </form>
  )
}
