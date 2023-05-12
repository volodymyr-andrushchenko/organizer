import { ReactNode, createContext, useState } from 'react'
import type { CalendarState, CalendarContextType } from './CalendarContext.type'

const initialCalendarState: CalendarState = {
  selectedDate: new Date(),
  layout: 'week',
  openDialog: false,
  openViewDialog: false,
  defaultEventDuration: 60,
  modal: false,
  eventDialogMaxWidth: 'md',
  fullscreen: false,
  allowFullScreen: false,
  withCloseIcon: true,
  title: '',
  content: '',
  actions: '',
  draggingEventId: -1,
  startDragging: false,
  ghostProperties: { width: 0, height: 0, date: new Date() },
}

export const CalendarContext = createContext<CalendarContextType>(
  {} as CalendarContextType
)

export function CalendarContextProvider({ children }: { children: ReactNode }) {
  const [stateCalendar, setStateCalendar] =
    useState<CalendarState>(initialCalendarState)

  return (
    <CalendarContext.Provider value={{ stateCalendar, setStateCalendar }}>
      {children}
    </CalendarContext.Provider>
  )
}
