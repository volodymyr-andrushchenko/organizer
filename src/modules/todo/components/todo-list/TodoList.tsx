import { TodoItem } from '@/modules/todo/types/todo.types'
import MarkForDeletionCheckbox from '../delete-checkbox/MarkForDeletionCheckbox'

type TodoListProps = {
  items: TodoItem[]
}

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
