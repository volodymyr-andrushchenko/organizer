import React, { useContext, useEffect } from 'react'
import { CalendarContext } from '../../providers/calendar-context/CalendarContext'
import { format, differenceInMinutes } from 'date-fns'
import { useDrag } from 'react-dnd'
import { getEmptyImage } from 'react-dnd-html5-backend'
import { BeginEnd, Marker, MarkerText } from './EventMark.styled'

function getStyles(
  left: number,
  top: number,
  isDragging: boolean,
  partOfStyle: React.CSSProperties
): React.CSSProperties {
  const transform = `translate3d(${left}px, ${top}px, 0)`

  return {
    position: 'absolute',
    transform: isDragging ? transform : 'initial',
    WebkitTransform: isDragging ? transform : 'initial',
    // IE fallback: hide the real node using CSS when dragging
    // because IE will ignore our custom "empty image" drag preview.
    opacity: isDragging ? 0 : 1,
    height: isDragging ? 0 : '',
    ...partOfStyle,
  }
}

function EventMark(props: any) {
  const { stateCalendar, setStateCalendar } = useContext(CalendarContext)
  const { defaultEventDuration } = stateCalendar

  const { calendarEvent, len, sq } = props
  // console.log(calendarEvent)

  const beginDate = new Date(calendarEvent.begin)
  const endDate = new Date(calendarEvent.end)

  const beginDateFormatted = format(
    beginDate,
    format(beginDate, 'mm') === '00' ? 'HH' : 'HH:mm'
  )
  const endDateFormatted = format(
    endDate,
    format(endDate, 'mm') === '00' ? 'HH' : 'HH:mm'
  )

  const currentDay = beginDate
  const initTime = new Date(format(currentDay, 'yyyy/MM/dd 0:0:0'))
  const position = differenceInMinutes(currentDay, initTime) + 2

  const duration = differenceInMinutes(endDate, beginDate) - 3

  const viewEvent = (props: any) => {
    const { calendarEvent } = props

    setStateCalendar({
      ...stateCalendar,
      openViewDialog: true,
      calendarEvent,
    })
  }

  const [{ isDragging }, drag, preview] = useDrag({
    type: 'eventMarker',
    item: { type: 'box' },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  })

  useEffect(() => {
    preview(getEmptyImage(), { captureDraggingState: false })
  }, [preview])

  const left = (100 / len) * sq + 1

  const partOfStyle: React.CSSProperties = {
    marginTop: position,
    height: duration,
    width: `calc((100% / ${len}) - 2px)`,
    marginLeft: `calc(100% / ${len} * ${sq})`,
  }

  const onDragStart = (eventEl: any, calendarEvent: any) => {
    const width = eventEl.currentTarget.parentElement.parentElement.offsetWidth
    const height = eventEl.currentTarget.clientHeight + 5

    setStateCalendar({
      ...stateCalendar,
      startDragging: true,
      draggingEventId: calendarEvent.id,
      calendarEvent,
      ghostProperties: { width, height },
    })
  }

  return (
    <Marker
      id={calendarEvent.id}
      ref={drag}
      onDragStart={(eventEl: any) => onDragStart(eventEl, calendarEvent)}
      style={getStyles(left, position / 57 - 2, isDragging, partOfStyle)}
      onClick={(eventEl: any) =>
        viewEvent({
          eventEl,
          calendarEvent,
          defaultEventDuration,
          stateCalendar,
          setStateCalendar,
        })
      }
    >
      <MarkerText>{calendarEvent.title}</MarkerText>
      <BeginEnd>
        <span>{beginDateFormatted}</span>
        <span> - </span>
        <span>{endDateFormatted}</span>
      </BeginEnd>
      <MarkerText style={{ fontSize: 7 }}>{`[${calendarEvent.id}]`}</MarkerText>
    </Marker>
  )
}

export default EventMark
