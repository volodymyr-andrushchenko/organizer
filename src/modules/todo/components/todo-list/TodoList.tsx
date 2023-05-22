import MarkForDeletionCheckbox from '../delete-checkbox/MarkForDeletionCheckbox'
import { TodoListProps } from './TodoList.interface'

export default function TodoList({ items }: TodoListProps) {
  return (
    <ul>
      {items.map((todo) => (
        <li key={todo.id}>
          {todo.text}
          <MarkForDeletionCheckbox id={todo.id} />
        </li>
      ))}
    </ul>
  )
}
