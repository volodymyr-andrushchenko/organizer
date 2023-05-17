import { useContext } from 'react'
import { CalendarContext } from '../../providers/calendar-context/CalendarContext'
import getSelectedWeekIndex from '../../common/getSelectedWeekIndex'
import CalendarLayoutMonth from '../CalendarLayoutMonth'
import CalendarLayoutDayWeek from '../CalendarLayoutDayWeek'
import { getDatesToDisplay } from '../../utils'
import { MainCalendarWrapper } from './CalendarMain.styled'

interface CalendarMainProps {
  runAnimation: boolean
}

function CalendarMain({ runAnimation }: CalendarMainProps) {
  const { stateCalendar } = useContext(CalendarContext)
  const { selectedDate, layout } = stateCalendar

  const weeks = getDatesToDisplay(selectedDate)
  const selectedWeekIndex = getSelectedWeekIndex(selectedDate, weeks)
  const selectedWeek = weeks[selectedWeekIndex]

  return (
    <MainCalendarWrapper>
      {/* {layout === "month" && <CalendarLayoutMonth weeks={weeks} runAnimation={runAnimation} />}

            {(layout === "week" || layout === "day") && (
                <CalendarLayoutDayWeek selectedWeekIndex={selectedWeekIndex} selectedWeek={selectedWeek} />
            )} */}
    </MainCalendarWrapper>
  )
}

export default CalendarMain
