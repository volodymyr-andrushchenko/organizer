import { configureStore } from '@reduxjs/toolkit'
import todoSlice from '../modules/todo/state/todo-slice'

const store = configureStore({
  reducer: {
    todo: todoSlice,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store
