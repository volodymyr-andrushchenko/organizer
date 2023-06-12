import { Typography, Grid } from '@mui/material'
import format from 'date-fns/format'
import { isToday } from 'date-fns'
import { Paper, Today } from './CalendarLayoutMonth.styled'

const CalendarLayoutMonth = ({ weeks }: { weeks: Date[][] }) => (
  <div style={{ borderLeft: '1px solid lightgray', height: '80vh' }}>
    <Grid container>
      {weeks[0].map((weekDay: Date, index: number) => {
        return (
          <Grid item xs key={`calendar-column-header-label-${index}`}>
            <Paper weekend={index == 5 || index == 6}>
              <Typography style={{ textTransform: 'capitalize' }}>
                {format(weekDay, 'E')}
              </Typography>
            </Paper>
          </Grid>
        )
      })}
    </Grid>

    {weeks.map((week, weekIndex) => (
      <Grid
        style={{ height: 'calc(100% / 6)' }}
        container
        key={`calendar-main-line-${weekIndex}`}
      >
        {week.map((day, dayIndex) => {
          return (
            <Grid
              item
              xs
              key={`calendar-main-line-${weekIndex}-column-${dayIndex}`}
            >
              <Paper
                style={{ height: '100%' }}
                weekend={dayIndex === 5 || dayIndex === 6}
              >
                {isToday(day) ? <Today>{day.getDate()}</Today> : day.getDate()}
              </Paper>
            </Grid>
          )
        })}
      </Grid>
    ))}
  </div>
)

export default CalendarLayoutMonth
