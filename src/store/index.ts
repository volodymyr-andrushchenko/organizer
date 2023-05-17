import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'

import todoSlice from '@/modules/todo/state/todo-slice'
import displaySlice from '@/modules/info-display/state/info-display-slice'

import mySaga from './sagas'

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
  reducer: {
    todo: todoSlice,
    display: displaySlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
})

sagaMiddleware.run(mySaga)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store
