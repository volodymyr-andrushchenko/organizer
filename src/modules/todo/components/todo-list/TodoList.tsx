import { TodoItem } from '@/modules/todo/types/todo.types'

type TodoListProps = {
  items: TodoItem[]
}

export default function TodoList({ items }: TodoListProps) {
  return (
    <ul>
      {items.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  )
}
