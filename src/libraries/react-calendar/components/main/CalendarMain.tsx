import { useContext } from 'react'
import { CalendarContext } from '../../providers/calendar-context/CalendarContext'
import { styled } from '@mui/system'
import getSelectedWeekIndex from '../../common/getSelectedWeekIndex'
import CalendarLayoutMonth from '../CalendarLayoutMonth'
import CalendarLayoutDayWeek from '../CalendarLayoutDayWeek'
import { getDatesToDisplay } from '../../utils'

const MainCalendarWrapper = styled('div')({
  flexGrow: 1,
  height: '100%',
  width: '100%',
  minWidth: 1000,
  marginTop: 64,
})

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
