import * as classes from './Todo.module.scss'
import Notes from '../sticky-notes/Notes'

function Todo() {
  return (
    <div>
      <h1 className={classes.root}>Todo list</h1>
      <Notes />
    </div>
  )
}

export default Todo
