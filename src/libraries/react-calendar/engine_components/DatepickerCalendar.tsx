import { createPortal } from 'react-dom'
import { Paper, ClickAwayListener, Collapse } from '@mui/material'
import DateSelectDropout from '../components/date-picker/DateSelectDropout'
import { CSSProperties } from 'styled-components'

const styles: Record<string, CSSProperties> = {
  collapseCalendar: {
    position: 'absolute',
    zIndex: 1600,
  },
  paper: {
    padding: 4,
    marginLeft: 8,
    maxWidth: 272,
  },
}

function DatepickerCalendar(props: any) {
  const {
    datepickerValue = new Date(),
    calendarPosition = { top: 0, left: 0 },
    openCalendar,
    handleClickAway,
    handleChangeDateCalendar,
  } = props

  const popupCalendar = (
    <ClickAwayListener onClickAway={handleClickAway}>
      <Collapse
        in={openCalendar}
        style={{
          top: calendarPosition.top,
          left: calendarPosition.left,
          ...styles.collapseCalendar,
        }}
      >
        <Paper style={styles.paper}>
          <DateSelectDropout
            datepickerOnChange={handleChangeDateCalendar}
            datepickerValue={datepickerValue}
          />
        </Paper>
      </Collapse>
    </ClickAwayListener>
  )

  const appRoot = document.body
  return createPortal(popupCalendar, appRoot)
}

export default DatepickerCalendar
