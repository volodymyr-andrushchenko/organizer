import { useContext } from 'react'
import { CalendarContext } from '../../providers/calendar-context/CalendarContext'
import CalendarLayoutMonth from '../calendar-month/CalendarLayoutMonth'
import CalendarLayoutDayWeek from '../calendar-day/CalendarLayoutDayWeek'
import { getDatesToDisplay, getSelectedWeekIndex } from '../../utils'
import { MainCalendarWrapper } from './CalendarMain.styled'

function CalendarMain() {
  const { stateCalendar } = useContext(CalendarContext)
  const { selectedDate, layout } = stateCalendar

  const weeks = getDatesToDisplay(selectedDate)
  const selectedWeekIndex = getSelectedWeekIndex(selectedDate, weeks)
  const selectedWeek = weeks[selectedWeekIndex]

  return (
    <MainCalendarWrapper>
      {layout === 'month' ? (
        <CalendarLayoutMonth weeks={weeks} />
      ) : (
        <CalendarLayoutDayWeek
          selectedWeekIndex={selectedWeekIndex}
          selectedWeek={selectedWeek}
        />
      )}
    </MainCalendarWrapper>
  )
}

export default CalendarMain
