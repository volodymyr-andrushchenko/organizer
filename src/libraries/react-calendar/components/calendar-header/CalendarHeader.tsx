import { useContext } from 'react'
import { CalendarContext } from '../../providers/calendar-context/CalendarContext'
import { format, isToday } from 'date-fns'
import Grid from '@mui/material/Grid'
import {
  HeaderContainer,
  HeaderFirstColumn,
  TimeColumnContainer,
  TimeColumnElement,
  Board,
  HeaderColumn,
  HeaderLabelsFirst,
  HeaderLabelsSecond,
  Today,
  NotToday,
} from './CalendarHeader.styled'

type Props = { selectedWeekIndex: number; selectedWeek: Date[] }

function CalendarHeader({ selectedWeek, selectedWeekIndex }: Props) {
  const { stateCalendar, setStateCalendar } = useContext(CalendarContext)
  const { selectedDate, layout } = stateCalendar

  const viewLayout = Array.from(
    Array(layout === 'week' ? 7 : layout === 'day' ? 1 : 0).keys()
  )

  const handleDayClick = (event: any) => {
    const gridParent = event.target.parentElement.parentElement
    setStateCalendar({
      ...stateCalendar,
      layout: 'day',
      selectedDate: new Date(gridParent.dataset.day),
    })
  }

  return (
    <HeaderContainer
      container
      spacing={0}
      direction="row"
      justifyContent="center"
      alignItems="stretch"
    >
      <TimeColumnContainer item xs={1}>
        <TimeColumnElement />
      </TimeColumnContainer>

      <Grid item xs>
        <Board
          container
          spacing={0}
          direction="row"
          justifyContent="center"
          alignItems="flex-start"
        >
          {viewLayout.map((index) => {
            const day = layout === 'week' ? selectedWeek[index] : selectedDate

            return (
              <HeaderColumn
                item
                xs
                id={`headerDay${index}`}
                data-group="day-header"
                data-day={day}
                key={`header-label-${layout}-${selectedWeekIndex}-${day}`}
              >
                <HeaderLabelsFirst>
                  <span>{format(day, 'E')}</span>
                </HeaderLabelsFirst>
                <HeaderLabelsSecond>
                  {isToday(day) ? (
                    <Today onClick={handleDayClick}>{format(day, 'd')}</Today>
                  ) : (
                    <NotToday onClick={handleDayClick}>
                      {format(day, 'd')}
                    </NotToday>
                  )}
                </HeaderLabelsSecond>
              </HeaderColumn>
            )
          })}
        </Board>
      </Grid>
    </HeaderContainer>
  )
}

export default CalendarHeader
