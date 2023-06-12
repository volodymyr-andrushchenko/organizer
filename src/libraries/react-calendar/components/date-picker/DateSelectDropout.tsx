import { useState } from 'react'
import {
  format,
  getMonth,
  addMonths,
  subMonths,
  isToday,
  isSameDay,
} from 'date-fns'
import Grid from '@mui/material/Grid'
import Tooltip from '@mui/material/Tooltip'
import IconButton from '@mui/material/IconButton'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import {
  Section,
  Title,
  Navigation,
  DayHeader,
  Day,
  CalendarSmallWrapper,
} from './DateSelectDropout.styled'
import { getDatesToDisplay } from '../../utils'

type Props = {
  datepickerValue: Date
  datepickerOnChange: (date: Date) => void
}

function DateSelectDropout({ datepickerValue, datepickerOnChange }: Props) {
  const [internalDate, setInternalDate] = useState(datepickerValue)

  const weeks = getDatesToDisplay(internalDate)

  function MoveMonths(direction: '<' | '>') {
    setInternalDate(
      direction === '<'
        ? subMonths(internalDate, 1)
        : addMonths(internalDate, 1)
    )
  }

  function selectDate(newDate: Date) {
    datepickerOnChange(newDate)
  }

  return (
    <CalendarSmallWrapper>
      <Section>
        <Grid
          container
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
          spacing={0}
          wrap="nowrap"
        >
          <Grid item xs={8}>
            <Title>{format(internalDate, 'MMMM yyyy')}</Title>
          </Grid>
          <Navigation
            item
            xs={4}
            container
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
            spacing={0}
            wrap="nowrap"
          >
            <Tooltip title="Previous Months">
              <IconButton size="small" onClick={() => MoveMonths('<')}>
                <ChevronLeftIcon />
              </IconButton>
            </Tooltip>{' '}
            <Tooltip title="Next Months">
              <IconButton size="small" onClick={() => MoveMonths('>')}>
                <ChevronRightIcon />
              </IconButton>
            </Tooltip>
          </Navigation>
        </Grid>

        <Grid
          container
          spacing={0}
          direction="row"
          justifyContent="center"
          alignItems="center"
          wrap="nowrap"
        >
          {weeks[0].map((weekDay: Date, index: number) => {
            return (
              <Grid item xs key={`small-calendar-column-header-${index}`}>
                <DayHeader>{format(weekDay, 'dd')}</DayHeader>
              </Grid>
            )
          })}
        </Grid>

        {weeks.map((week: Date[], weekIndex: number) => (
          <Grid
            container
            spacing={0}
            direction="row"
            justifyContent="center"
            alignItems="center"
            wrap="nowrap"
            key={`small-calendar-line-${weekIndex}`}
          >
            {week.map((day: Date, dayIndex: number) => {
              const isSelected = isSameDay(datepickerValue, day)

              const isCurrentMonth = getMonth(internalDate) === getMonth(day)

              return (
                <Grid
                  item
                  xs
                  key={`small-calendar-line-${weekIndex}-column-${dayIndex}`}
                >
                  <Day
                    selected={isSelected}
                    today={isToday(day)}
                    isCurrentMonth={isCurrentMonth}
                    onClick={() => selectDate(day)}
                  >
                    {day.getDate()}
                  </Day>
                </Grid>
              )
            })}
          </Grid>
        ))}
      </Section>
    </CalendarSmallWrapper>
  )
}

export default DateSelectDropout
