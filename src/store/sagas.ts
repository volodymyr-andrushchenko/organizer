import {
  deleteTodos,
  DELETE_TODOS_REQUESTED,
} from '@/modules/todo/redux/todo-slice.sagas.delete'
import { takeEvery } from 'redux-saga/effects'

function* mySaga() {
  yield takeEvery(DELETE_TODOS_REQUESTED, deleteTodos)
}

export default mySaga
