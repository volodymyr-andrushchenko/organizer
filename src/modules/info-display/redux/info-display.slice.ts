import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface DisplayState {
  message: string
}

const initialState: DisplayState = {
  message: '',
}

const displaySlice = createSlice({
  name: 'display',
  initialState,
  reducers: {
    setMessage(state, action: PayloadAction<string>) {
      state.message = action.payload
    },
  },
})

export const { setMessage } = displaySlice.actions

export default displaySlice.reducer
