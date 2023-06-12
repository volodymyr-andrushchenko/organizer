import Grid from '@mui/material/Grid'
import { cyan } from '@mui/material/colors'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import CalendarHeader from '../calendar-header/CalendarHeader'
import CalendarBoard from '../board/CalendarBoard'
import CalendarBoardDragLayer from '../CalendarBoardDragLayer'
import {
  Body,
  TimeColumnContainer,
  TimeColumnElement,
} from './CalendarLayoutDay.styled'

type Props = { selectedWeekIndex: number; selectedWeek: Date[] }

const CalendarLayoutDayWeek = ({ selectedWeekIndex, selectedWeek }: Props) => (
  <>
    <CalendarHeader
      selectedWeekIndex={selectedWeekIndex}
      selectedWeek={selectedWeek}
    />

    <Body
      container
      spacing={0}
      direction="row"
      justifyContent="center"
      alignItems="stretch"
    >
      <TimeColumnContainer item xs={1}>
        <div style={{ position: 'relative' }}>
          <TimeColumnElement />
          {Array.from(Array(23).keys()).map((index) => {
            return (
              <TimeColumnElement key={`time-${index}`}>
                <span>{index + 1}</span>
              </TimeColumnElement>
            )
          })}
          <TimeColumnElement />
        </div>
      </TimeColumnContainer>

      <Grid
        item
        xs
        style={{
          overflowX: 'auto',
          overflowY: 'scroll',
          display: 'flex',
          alignItems: 'flex-start',
        }}
      >
        <DndProvider backend={HTML5Backend}>
          <CalendarBoard
            selectedWeekIndex={selectedWeekIndex}
            selectedWeek={selectedWeek}
          />
          <CalendarBoardDragLayer />
        </DndProvider>
      </Grid>
    </Body>
  </>
)

export default CalendarLayoutDayWeek
