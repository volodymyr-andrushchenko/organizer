import { useState, useEffect, useContext } from 'react'
import { CalendarContext } from '../../providers/calendar-context/CalendarContext'
import { format, differenceInMinutes, addMinutes, isToday } from 'date-fns'
import { useDrop } from 'react-dnd'
import LineDivisor from '../line-divisor/LineDivisor'
import EventMark from '../event-mark/EventMark'
import {
  Board,
  ColumnDivisor,
  CurrentTimeDot,
  CurrentTimeLine,
  DayContainer,
  EventsContainer,
} from './CalendarBoard.styled'

type event = {
  id: string | number
  title: string
  description: string
  begin: string
  end: string
}

function CalendarBoard(props: any) {
  const { selectedWeekIndex, selectedWeek } = props

  const { stateCalendar, setStateCalendar } = useContext(CalendarContext)
  const { selectedDate, layout, defaultEventDuration, draggingEventId } =
    stateCalendar

  const [currentTimePosition, setCurrentTimePosition] = useState<number>()

  useEffect(() => {
    setInterval(() => {
      const now = new Date()
      const initTime = new Date(format(now, 'yyyy/MM/dd 0:0:0'))
      const position = differenceInMinutes(now, initTime)
      setCurrentTimePosition(position)
    }, 1000)
  }, [])

  const viewLayout = Array.from(
    Array(layout === 'week' ? 7 : layout === 'day' ? 1 : 0).keys()
  )

  const localStorageMarkers = window.localStorage.getItem('markers')

  const getEventData = (day: Date) => {
    console.log('getting events...')
    const monthEvents =
      (localStorageMarkers &&
        JSON.parse(localStorageMarkers).sort((a: event, b: event) => {
          return new Date(a.begin).getTime() - new Date(b.begin).getTime()
        })) ||
      []

    const dayEvents = monthEvents.filter((event: any) => isToday(day))

    const dayHoursEvents = dayEvents
      .map((event: any) => new Date(event.begin).getHours())
      .sort((numberA: number, numberB: number) => numberA - numberB)

    const eventsByHour = dayHoursEvents.reduce((acc: any[], hour: number) => {
      const len = dayHoursEvents.filter(
        (eventHour: number) => eventHour === hour
      ).length
      !acc.some((accItem: any) => accItem.hour === hour) &&
        acc.push({ hour, len })
      return acc
    }, [])

    const markers = eventsByHour.map((evHour: any) => {
      return dayEvents
        .filter(
          (event: any) => new Date(event.begin).getHours() === evHour.hour
        )
        .map((event: any, index: number) => (
          <EventMark
            key={`event-${event.id}`}
            calendarEvent={event}
            sq={index}
            len={evHour.len}
          />
        ))
    })
    return markers
  }

  const CurrentTimeMark = (props: any) => {
    const { marginTop = -1000 } = props
    return (
      <>
        <CurrentTimeDot style={{ marginTop: marginTop - 5 }} />
        <CurrentTimeLine style={{ marginTop: marginTop }} />
      </>
    )
  }

  const onDrop = (eventEl: any) => {
    const eventID = draggingEventId

    const eventMarkGhost: any = document.querySelector('[data-ghost]')
    if (!eventMarkGhost) return false

    const eventBeginDate = new Date(eventMarkGhost.dataset.date)
    if (!eventBeginDate) return

    const localStorageMarkers = window.localStorage.getItem('markers')
    const markers =
      (localStorageMarkers && JSON.parse(localStorageMarkers)) || []

    const draggedEvent = markers.find(
      (markEvent: any) => markEvent.id === eventID
    )

    const duration = differenceInMinutes(
      new Date(draggedEvent.end),
      new Date(draggedEvent.begin)
    )

    const marker = {
      ...draggedEvent,
      begin: format(eventBeginDate, 'yyyy/MM/dd HH:mm'),
      end: format(addMinutes(eventBeginDate, duration), 'yyyy/MM/dd HH:mm'),
    }

    window.localStorage.setItem(
      'markers',
      JSON.stringify([
        ...markers.filter((markEvent: any) => markEvent.id !== eventID),
        marker,
      ])
    )

    setStateCalendar({ ...stateCalendar, draggingEventId: -1 })
  }

  const [, drop] = useDrop({
    accept: 'box',
    drop(item: any, monitor: any) {
      return undefined
    },
  })

  const viewLayoutEl = viewLayout.map((index) => {
    const day = layout === 'week' ? selectedWeek[index] : selectedDate
    const eventsOfDay = getEventData(day)

    return (
      <DayContainer
        item
        xs
        id={`day${index + 1}`}
        data-group="day-column"
        data-date={day}
        key={`board-day-column-${layout}-${selectedWeekIndex}-${day}-${index}`}
        onClick={() => {
          setStateCalendar({
            openDialog: true,
          })
        }}
      >
        {isToday(day) && <CurrentTimeMark marginTop={currentTimePosition} />}

        {eventsOfDay && eventsOfDay.length > 0 && (
          <EventsContainer data-date={day}>{eventsOfDay}</EventsContainer>
        )}
      </DayContainer>
    )
  })

  return (
    <Board
      ref={drop}
      onDrop={onDrop}
      container
      spacing={0}
      direction="row"
      justifyContent="center"
      alignItems="flex-start"
    >
      <LineDivisor />
      <ColumnDivisor />

      {viewLayoutEl}
    </Board>
  )
}

export default CalendarBoard
