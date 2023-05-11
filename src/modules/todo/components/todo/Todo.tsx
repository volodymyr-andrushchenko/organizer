import * as classes from './Todo.module.scss'
import { useCreateTodo } from '@/modules/todo/hooks/useMutationToPostTodo'
import { useFetchTodos } from '@/modules/todo/hooks/useFetchTodos'
import TodoList from '../todo-list/TodoList'
import AddTodoForm from '../add-todo-form/AddTodoForm'
import Notes from '../sticky-notes/Notes'

function Todo() {
  const todoList = useFetchTodos()

  const { mutate: todoCreate } = useCreateTodo()

  const onSubmit = handleSubmit(({ text }) => {
    todoCreate({
      text,
    })

    reset()
  })

  return (
    <div>
      <h1 className={classes.root}>Todo list</h1>
      {todoList.isLoading && 'loading...'}
      {todoList.data && <TodoList items={todoList.data} />}
      <AddTodoForm />

      <Notes />
    </div>
  )
}

export default Todo
