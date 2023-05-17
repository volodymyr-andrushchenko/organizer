import { call, put, delay, all } from 'redux-saga/effects'
import axios from 'axios'
import type { TodoItem } from '@/modules/todo/types/todo.types'
import { queryClient } from '@/providers/ReactQueryProvider'
import { FETCH_TODO_LIST_QUERY_KEY } from '@/modules/todo/hooks/useFetchTodos'
import { setMessage } from '@/modules/info-display/state/info-display-slice'
import { clearAllMarkedForDeletion } from '../state/todo-slice'

type TodoItemId = TodoItem['id']

function deleteTodo(id: TodoItemId) {
  return axios.delete(`/api/todos/${id}`).catch((err) => console.error(err))
}

// use this api to inform mother that tasks are completed
function postCompletion() {
  return axios
    .post<string>('/api/inform-mother')
    .then(({ data }) => data)
    .catch(() => `error while informing mom`)
}

export type DeleteTodosAction = {
  type: 'DELETE_TODOS_REQUESTED'
  payload: {
    todosMarkedForDeletion: TodoItemId[]
  }
}

export const DELETE_TODOS_REQUESTED: DeleteTodosAction['type'] =
  'DELETE_TODOS_REQUESTED'

export function* deleteTodos(action: DeleteTodosAction) {
  try {
    // inform mom
    const momResponse: Awaited<ReturnType<typeof postCompletion>> = yield call(
      postCompletion
    )

    // display message
    yield put(setMessage({ message: momResponse }))

    // delete them from server
    yield all(
      action.payload.todosMarkedForDeletion.map((id) => call(deleteTodo, id))
    )

    // clear redux store
    yield put(clearAllMarkedForDeletion)

    // refetch
    queryClient
      .invalidateQueries({ queryKey: [FETCH_TODO_LIST_QUERY_KEY] })
      // catch inside of catch?
      .catch((err: unknown) => {
        console.log(err)
      })

    // clear message after one second
    yield delay(5000)
    yield put(setMessage({ message: '' }))
  } catch (err) {
    console.error(err)
  }
}
