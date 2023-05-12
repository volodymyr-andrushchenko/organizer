export type Layout = 'week' | 'day' | 'month'

export type EventTime = {
  value: number
  label: string
}

export type EventDate = Date

// TODO: replace number with EventTime
export type Event = {
  begin: number
  end: number
  id: number
}

export type DialogWidth = 'sm' | 'md'

export type GhostProperties = {
  width: number
  height: number
  date: Date
}

export type CalendarState = {
  selectedDate: Date
  layout: Layout
  openDialog: boolean
  openViewDialog: boolean
  eventBeginDate?: EventDate
  eventBeginTime?: EventTime
  eventEndDate?: EventDate
  eventEndTime?: EventTime
  defaultEventDuration: number
  modal: boolean
  eventDialogMaxWidth: DialogWidth
  fullscreen: boolean
  allowFullScreen: boolean
  withCloseIcon: boolean
  title: string
  content: string
  actions: string
  calendarEvent?: Event
  draggingEventId: number
  startDragging: boolean
  ghostProperties: GhostProperties
}

export type CalendarContextType = {
  stateCalendar: CalendarState
  setStateCalendar: React.Dispatch<React.SetStateAction<CalendarState>>
}
