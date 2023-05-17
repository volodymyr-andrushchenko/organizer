import * as classes from './Todo.module.scss'
import { useFetchTodos } from '@/modules/todo/hooks/useFetchTodos'
import TodoList from '../todo-list/TodoList'
import DeleteMarkedTodos from '../delete-todos-form/DeleteMarkedTodos'
import Notes from '../sticky-notes/Notes'
import InfoDisplay from '@/modules/info-display/components/InfoDisplay'

function Todo() {
  const todoList = useFetchTodos()
  return (
    <div>
      <h1 className={classes.root}>Todo list</h1>
      {todoList.isLoading && 'loading...'}
      {todoList.data && <TodoList items={todoList.data} />}
      <DeleteMarkedTodos />

      <Notes />

      <InfoDisplay />
    </div>
  )
}

export default Todo
