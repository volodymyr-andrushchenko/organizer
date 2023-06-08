import React, { useState, useRef, useEffect, useCallback } from 'react'
import { format, isValid } from 'date-fns'
import { TextField, IconButton, InputAdornment } from '@mui/material'
import TodayIcon from '@mui/icons-material/Today'
import DatepickerCalendar from './DatepickerCalendar'
import { CSSProperties } from 'styled-components'

const styles: Record<string, CSSProperties> = {
  collapseCalendar: {
    position: 'absolute',
  },
  textField: {
    '&:hover': {
      backgroundColor: '#f5f5f5',
    },
  },
  todayButton: {
    marginRight: 2,
  },
  todayIcon: {
    fontSize: '1.5rem',
    padding: 2,
  },
}

type Props = {
  dateFormat?: string
  originalValue: Date
  onChange: (date: Date) => void
}

function Datepicker(props: Props) {
  const {
    dateFormat = 'dd/mm/yyyy',
    originalValue = new Date(),
    onChange,
  } = props

  const applyDateFormat = useCallback(
    (date: Date) => {
      return format(date, dateFormat)
    },
    [dateFormat]
  )

  const datepickerRef = useRef()
  const [openCalendar, setOpenCalendar] = useState(false)
  const [calendarPosition, setCalendarPosition] = useState({ top: 0, left: 0 })

  const [dateTextValue, setDateTextValue] = useState(
    applyDateFormat(originalValue)
  )
  const [dateValue, setDateValue] = useState<Date>()

  const handleClickAway = () => {
    setOpenCalendar(false)
  }

  const handleOpenCalendar = (event: any) => {
    const datepickerRefCurrent: any = datepickerRef.current!

    const { x, y } =
      datepickerRefCurrent && datepickerRefCurrent.getBoundingClientRect()

    setCalendarPosition({
      top: y + 40,
      left: document.body.offsetWidth - x < 300 ? x - 100 : x,
    })

    setOpenCalendar(!openCalendar)
  }

  const inputProps = {
    endAdornment: (
      <InputAdornment position="end">
        <IconButton
          size="medium"
          edge="end"
          aria-label="Toggle calendar visibility"
          onClick={handleOpenCalendar}
        >
          <TodayIcon style={styles.todayIcon} />
        </IconButton>
      </InputAdornment>
    ),
  }

  const handleChangeDateCalendar = (value: Date) => {
    setDateTextValue(format(value, dateFormat))
    setOpenCalendar(false)
    setDateValue(value)
    onChange(value)
  }

  const handleChangeTextField = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDateTextValue(event.target.value)
  }

  const dateValidation = (value: string) => {
    let dateReceived: any = value.replace(/-/g, '/').replace(/\./g, '/')
    const dateA = dateReceived.split('/')

    const validDateFormat = new RegExp(
      /^((\d{1,2})[-|.|/](\d{1,2})[-|.|/](\d{2,4}))|((\d{2,4})[-|.|/](\d{1,2})[-|.|/](\d{1,2}))$/
    )
    const validDateFormatYf = new RegExp(
      /^(\d{2,4})[-|.|/](\d{1,2})[-|.|/](\d{1,2})$/
    )

    const isDateOK = validDateFormat.test(dateReceived)

    if (!isDateOK) {
      return new Date(originalValue)
    }

    const hasYearFirst = validDateFormatYf.test(dateReceived)

    const year = (hasYearFirst && dateA[0]) || dateA[2]
    const month = dateA[1] > 12 ? (!hasYearFirst ? dateA[0] : 99) : dateA[1]
    const day = hasYearFirst ? dateA[2] : dateA[0]

    dateReceived = new Date(year, month - 1, day)

    return dateReceived
  }

  const handleBlurTextField = (
    event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement, Element>
  ) => {
    const dateValue = event.target.value

    if (dateValue.length <= 0) {
      return false
    }

    const validatedDate = dateValidation(dateValue)
    const correctDate = isValid(validatedDate) ? validatedDate : originalValue
    setDateTextValue(applyDateFormat(correctDate))
    setDateValue(correctDate)

    onChange(correctDate)
  }

  useEffect(() => {
    setDateValue(originalValue)
    setDateTextValue(applyDateFormat(originalValue))

    if (format(originalValue, 'yyyy/mm/dd') === '1970/01/01') {
      setOpenCalendar(false)
    }
  }, [originalValue, applyDateFormat])

  return (
    <>
      <TextField
        inputRef={datepickerRef}
        style={styles.textField}
        variant="standard"
        fullWidth
        type={'text'}
        label={''}
        value={dateTextValue}
        onChange={handleChangeTextField}
        onBlur={handleBlurTextField}
        InputProps={inputProps}
      />
      {openCalendar && (
        <DatepickerCalendar
          datepickerValue={dateValue}
          calendarPosition={calendarPosition}
          openCalendar={openCalendar}
          handleClickAway={handleClickAway}
          handleChangeDateCalendar={handleChangeDateCalendar}
        />
      )}
    </>
  )
}

export default Datepicker
