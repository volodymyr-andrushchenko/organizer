/* eslint-disable react-hooks/rules-of-hooks */
import { markForDeletion, clearMarkedForDeletion } from '../../redux/todo-slice'
import { useAppSelector, useAppDispatch } from '@/store/hooks'
import { TodoItem } from '../../types/todo.types'
import { selectIsTodoMarkedForDeletion } from '../../redux/todo-slice.selectors'

type DeleteCheckboxProps = {
  id: TodoItem['id']
}

const MarkForDeletionCheckbox = ({ id }: DeleteCheckboxProps) => {
  const dispatch = useAppDispatch()

  const isMarkedForDeletion = useAppSelector(selectIsTodoMarkedForDeletion(id))

  const onChange = () => {
    if (isMarkedForDeletion) {
      dispatch(clearMarkedForDeletion(id))
    } else {
      dispatch(markForDeletion(id))
    }
  }

  return (
    <input type="checkbox" checked={isMarkedForDeletion} onChange={onChange} />
  )
}

export default MarkForDeletionCheckbox
