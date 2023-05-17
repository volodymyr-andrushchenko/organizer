import { useContext, useState } from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import {
  addMonths,
  addWeeks,
  addDays,
  subMonths,
  subWeeks,
  subDays,
} from 'date-fns'
import { CalendarContext } from '../../providers/calendar-context/CalendarContext'
import CalendarToolbar from '../toolbar/CalendarToolbar'
import CalendarMain from '../main/CalendarMain'
import CalendarEventDialog from '../CalendarEventDialog'
import CalendarEventViewDialog from '../CalendarEventViewDialog'
import { RootWrapper } from './Calendar.styled'
import CalendarSmall from '../miniature/CalendarSmall'

function Calendar() {
  const { stateCalendar, setStateCalendar } = useContext(CalendarContext)

  const [runAnimation, setRunAnimation] = useState(true)

  const goToToday = () => {
    setRunAnimation(false)
    const newDate = new Date()
    setStateCalendar({ selectedDate: newDate })
  }

  const next = () => {
    setRunAnimation(false)
    let newDate: Date

    switch (stateCalendar.layout) {
      case 'week':
        newDate = addWeeks(stateCalendar.selectedDate, 1)
        break

      case 'day':
        newDate = addDays(stateCalendar.selectedDate, 1)
        break

      default:
        // month
        newDate = addMonths(stateCalendar.selectedDate, 1)
        break
    }
    setStateCalendar({ selectedDate: newDate })
  }

  const previous = () => {
    setRunAnimation(false)
    let newDate

    switch (stateCalendar.layout) {
      case 'week':
        newDate = subWeeks(stateCalendar.selectedDate, 1)
        break

      case 'day':
        newDate = subDays(stateCalendar.selectedDate, 1)
        break

      default:
        // month
        newDate = subMonths(stateCalendar.selectedDate, 1)
        break
    }
    setStateCalendar({ selectedDate: newDate })
  }

  return (
    <RootWrapper>
      <CssBaseline />

      <CalendarToolbar goToToday={goToToday} next={next} previous={previous} />

      <CalendarSmall />

      <CalendarMain runAnimation={runAnimation} />
      {/*
                <CalendarEventDialog />
                <CalendarEventViewDialog /> */}
    </RootWrapper>
  )
}

export default Calendar
