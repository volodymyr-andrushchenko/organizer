import { ReactNode, createContext, useState } from "react"

export type Layout = 'week' | 'day' | 'month'

interface CalendarState {
    selectedDate: Date
    layout: Layout
    openDialog: boolean
    openViewDialog: boolean
    eventBeginDate: Date | null
    eventBeginTime: { value: number | null, label: string | null }
    eventEndDate: Date | null
    eventEndTime: { value: number | null, label: string | null }
    defaultEventDuration: number
    modal: boolean
    eventDialogMaxWidth: 'sm' | 'md'
    fullscreen: boolean
    allowFullScreen: boolean
    withCloseIcon: boolean
    title: string
    content: string
    actions: string
    calendarEvent: {
        begin: number
        end: number
        id: number
    } | null
    draggingEventId: number
    startDragging: boolean
    ghostProperties: { width: number, height: number, date: Date }
}

type CalendarContextType = {
    stateCalendar: CalendarState
    setStateCalendar: React.Dispatch<React.SetStateAction<CalendarState>>
}

const initialCalendarState: CalendarState = {
    selectedDate: new Date(),
    layout: 'week',
    openDialog: false,
    openViewDialog: false,
    eventBeginDate: null,
    eventBeginTime: { value: null, label: null },
    eventEndDate: null,
    eventEndTime: { value: null, label: null },
    defaultEventDuration: 60,
    modal: false,
    eventDialogMaxWidth: "md",
    fullscreen: false,
    allowFullScreen: false,
    withCloseIcon: true,
    title: "",
    content: "",
    actions: "",
    calendarEvent: null,
    draggingEventId: -1,
    startDragging: false,
    ghostProperties: { width: 0, height: 0, date: new Date() },
}

export const CalendarContext = createContext<CalendarContextType>({} as CalendarContextType)

export function CalendarContextProvider({ children }: { children: ReactNode }) {
    const [stateCalendar, setStateCalendar] = useState<CalendarState>(initialCalendarState)

    return (
        <CalendarContext.Provider value={{ stateCalendar, setStateCalendar }}>
            {children}
        </CalendarContext.Provider>
    )
}