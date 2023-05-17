import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '@/store'

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
    setMessage(state, action: PayloadAction<DisplayState>) {
      state.message = action.payload.message
    },
  },
})

export const { setMessage } = displaySlice.actions

export const selectDisplayMessage = (state: RootState) => state.display.message

export default displaySlice.reducer
