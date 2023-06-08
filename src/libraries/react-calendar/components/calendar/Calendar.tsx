import { useContext } from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import { updatedDate } from '../../utils'
import type { Operation } from '../../utils/updateDate'
import { CalendarContext } from '../../providers/calendar-context/CalendarContext'
import CalendarToolbar from '../toolbar/CalendarToolbar'
import CalendarMain from '../main/CalendarMain'
import CalendarEventDialog from '../calendar-event-dialog/CalendarEventDialog'
import CalendarEventViewDialog from '../CalendarEventViewDialog'
import { RootWrapper } from './Calendar.styled'
import CalendarSmall from '../miniature/CalendarSmall'

function Calendar() {
  const { stateCalendar, setStateCalendar } = useContext(CalendarContext)

  const goToToday = () => {
    const newDate = new Date()
    setStateCalendar({ selectedDate: newDate })
  }

  const updateDate = (op: Operation) => () => {
    setStateCalendar({
      selectedDate: updatedDate(
        stateCalendar.selectedDate,
        `${op}/${stateCalendar.layout}`
      ),
    })
  }

  const next = updateDate('add')

  const previous = updateDate('sub')

  return (
    <RootWrapper>
      <CssBaseline />

      <CalendarToolbar goToToday={goToToday} next={next} previous={previous} />

      <CalendarSmall />

      <CalendarMain />

      <CalendarEventDialog />
      {/*         <CalendarEventViewDialog /> */}
    </RootWrapper>
  )
}

export default Calendar
