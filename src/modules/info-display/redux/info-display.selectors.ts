import { RootState } from '@/store'

export const selectDisplayMessage = (state: RootState) => state.display.message
