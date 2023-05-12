import { useContext } from 'react'
import { CalendarContext } from '../../providers/calendar-context/CalendarContext'
import Toolbar from '@mui/material/Toolbar'
import Tooltip from '@mui/material/Tooltip'
import IconButton from '@mui/material/IconButton'
import TodayIcon from '@mui/icons-material/Today'
import ViewWeekIcon from '@mui/icons-material/ViewWeek'
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay'
import ViewModuleIcon from '@mui/icons-material/ViewModule'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import Select from 'react-select'
import format from 'date-fns/format'
import { Layout } from '../../providers/calendar-context/CalendarContext.type'
import { RootWrapper, Title } from './CalendarToolbar.styled'

const languageOptions = [
  {
    value: 'en-US',
    label: 'English',
  },
]

interface CalendarToolbarProps {
  goToToday: () => void
  next: () => void
  previous: () => void
}

function CalendarToolbar({ goToToday, next, previous }: CalendarToolbarProps) {
  const { stateCalendar, setStateCalendar } = useContext(CalendarContext)
  const { selectedDate, layout } = stateCalendar

  const setLayout = (layout: Layout) => {
    setStateCalendar({ ...stateCalendar, layout })
  }

  const showMonthsAndYears = format(selectedDate, 'MMMM YYY')

  return (
    <RootWrapper>
      <Toolbar>
        <Tooltip title={`${format(new Date(), 'dddd MMMM')}`}>
          <IconButton
            color="inherit"
            aria-label="Today"
            onClick={goToToday}
            edge="start"
          >
            <TodayIcon />
          </IconButton>
        </Tooltip>

        <Tooltip title={`Previous ${layout}`}>
          <IconButton onClick={previous}>
            <ChevronLeftIcon />
          </IconButton>
        </Tooltip>

        <Tooltip title={`Next ${layout}`}>
          <IconButton onClick={next}>
            <ChevronRightIcon />
          </IconButton>
        </Tooltip>

        <Title>{showMonthsAndYears}</Title>

        <Tooltip title={'Day'} style={{ marginTop: 2 }}>
          <IconButton
            color="inherit"
            aria-label="Day View"
            onClick={() => setLayout('day')}
            edge="start"
            style={{ marginRight: 8 }}
          >
            <CalendarViewDayIcon />
          </IconButton>
        </Tooltip>

        <Tooltip title="Week" style={{ marginTop: 2 }}>
          <IconButton
            color="inherit"
            aria-label="Week View"
            onClick={() => setLayout('week')}
            edge="start"
            style={{ marginRight: 8 }}
          >
            <ViewWeekIcon />
          </IconButton>
        </Tooltip>

        <Tooltip title="Month" style={{ marginTop: 2 }}>
          <IconButton
            color="inherit"
            aria-label="Month View"
            onClick={() => setLayout('month')}
            edge="start"
            style={{ marginRight: 8 }}
          >
            <ViewModuleIcon />
          </IconButton>
        </Tooltip>

        <Select
          options={languageOptions}
          defaultValue={languageOptions[0]}
          onChange={() => {
            console.log('implement lang change')
          }}
        />
      </Toolbar>
    </RootWrapper>
  )
}

export default CalendarToolbar
