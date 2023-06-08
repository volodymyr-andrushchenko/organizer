import React, { useContext, useState, useRef, useEffect } from 'react'
import { CalendarContext } from '../../providers/calendar-context/CalendarContext'
import grey from '@mui/material/colors/grey'

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Slide,
} from '@mui/material'
import type { SlideProps } from '@mui/material'
import { format, getTime } from 'date-fns'
import TimeSelect from '../../engine_components/TimeSelect'
import Datepicker from '../../engine_components/Datepicker'

import {
  CloseButtonWrapper,
  FormControl,
  FormControlFlex,
  IconButton,
  Form,
  DayOfWeek,
} from './CalendarEventDialog.styled'

import {
  Fullscreen,
  FullscreenExit,
  Close,
  AccessTime,
  Subject,
} from '@mui/icons-material'
import { EventTime } from '../../providers/calendar-context/CalendarContext.type'
import { CSSProperties } from 'styled-components'

const Transition = React.forwardRef<unknown, SlideProps>(function Transition(
  props,
  ref
) {
  return <Slide direction="down" ref={ref} {...props} />
})

const styles: Record<string, CSSProperties> = {
  descriptionIcon: {
    marginRight: 4,
  },
  formControlLabel: {
    marginTop: 4,
  },
  betweenDates: {
    textAlign: 'center',
    fontSize: 16,
    paddingLeft: 8,
    paddingRight: 8,
  },
  datepicker: {
    width: 130,
    marginLeft: 4,
    marginRight: 4,
    '&:hover': {
      backgroundColor: grey[100],
    },
  },
}

const interval = 30
const timeOptions = Array.from(Array(24).keys()).reduce(
  (time: any[], hour: number) => {
    Array.from(Array(60 / interval).keys()).map((i) => {
      const timeItem = (+(hour + '.' + i * interval))
        .toFixed(2)
        .replace('.', ':')
      time.push({ value: timeItem, label: timeItem })
      return null
    })
    return time
  },
  []
)

function CalendarEventDialog(props: any) {
  const { stateCalendar, setStateCalendar } = useContext(CalendarContext)
  const {
    modal = false,
    eventDialogMaxWidth = 'md',
    fullscreen = false,
    allowFullScreen = false,
    withCloseIcon = true,
    title,
    description,
    openDialog,
    eventBeginDate,
    eventBeginTime,
    eventEndDate,
    eventEndTime,
  } = stateCalendar

  const handleCloseDialog = () => {
    setStateCalendar({
      ...stateCalendar,
      openDialog: false,
      openViewDialog: false,
    })
  }

  const [fullScreen, setFullScreen] = useState(false)

  const textFieldTitle: React.RefObject<HTMLInputElement> = useRef(null)
  const [titleTF, setTitleTF] = useState(title)
  const [descriptionTF, setDescriptionTF] = useState(description)

  useEffect(() => {
    setTitleTF(title)
  }, [title])

  useEffect(() => {
    setDescriptionTF(description)
  }, [description])

  const onExited = () => {
    setFullScreen(false)
    setDescriptionTF('')
    setTitleTF('')
  }

  const handleOnClose = () => {
    !modal && handleClose()
  }

  const handleClose = () => {
    handleCloseDialog()
  }

  const handleFullScreen = () => {
    setFullScreen(!fullScreen)
  }

  const handleOk = () => {
    if (!eventBeginDate || !eventBeginTime || !eventEndDate || !eventEndTime) {
      return
    }

    const localStorageMarckers = window.localStorage.getItem('markers')

    const markers =
      (localStorageMarckers && JSON.parse(localStorageMarckers)) || []

    const marker = {
      id: getTime(new Date()),
      title: titleTF,
      begin: format(
        formatDateTime(eventBeginDate, eventBeginTime.value.toString()),
        'yyyy/mm/dd HH:mm:ss'
      ),
      end: format(
        formatDateTime(eventEndDate, eventEndTime.value.toString()),
        'yyyy/mm/dd HH:mm:ss'
      ),
      description: descriptionTF,
    }

    window.localStorage.setItem('markers', JSON.stringify([...markers, marker]))

    handleClose()
  }

  const formatDateTime = (newDate: Date, newTime: string) => {
    const dateTxt = format(newDate, 'YYYY/MM/DD')
    return new Date(dateTxt + ' ' + newTime)
  }

  const onChangeBeginDate = (newDate: Date) => {
    setStateCalendar({
      eventBeginDate: newDate,
    })
  }
  const onChangeEndDate = (newDate: Date) => {
    setStateCalendar({ eventEndDate: newDate })
  }

  const onChangeBeginTime = (newValue: EventTime) => {
    setStateCalendar({ eventBeginTime: newValue })
  }

  const onChangeEndTime = (newValue: EventTime) => {
    setStateCalendar({ eventEndTime: newValue })
  }

  const dateFormat = 'dd/MM/yyyy'

  const buttonDisabled =
    eventBeginTime &&
    eventEndTime &&
    eventBeginDate &&
    eventEndDate &&
    formatDateTime(eventBeginDate, eventBeginTime.value.toString()) >
      formatDateTime(eventEndDate, eventEndTime.value.toString())

  return (
    <Dialog
      fullScreen={fullscreen || fullScreen}
      fullWidth={true}
      maxWidth={eventDialogMaxWidth}
      open={openDialog}
      onClose={handleOnClose}
      aria-labelledby="max-width-dialog-title"
      TransitionComponent={Transition}
      keepMounted={false}
    >
      <DialogTitle>
        {title}
        <CloseButtonWrapper>
          {allowFullScreen ? (
            <IconButton aria-label="Close" onClick={handleFullScreen}>
              {!fullScreen ? <Fullscreen /> : <FullscreenExit />}
            </IconButton>
          ) : null}
          {withCloseIcon ? (
            <IconButton aria-label="Close" onClick={handleClose}>
              <Close />
            </IconButton>
          ) : null}
        </CloseButtonWrapper>
      </DialogTitle>
      <DialogContent>
        <Form noValidate>
          <FormControl>
            <TextField
              inputRef={textFieldTitle}
              fullWidth={true}
              placeholder="Title"
              name="title"
              value={titleTF}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setTitleTF(event.target.value)
              }}
              onKeyDown={(event: React.KeyboardEvent<HTMLInputElement>) => {
                if (event.key === 'Enter' && !buttonDisabled) {
                  handleOk()
                  handleClose()
                }
              }}
              margin="normal"
              required={true}
            />
          </FormControl>
          <FormControlFlex>
            <AccessTime />
            <Datepicker
              dateFormat={dateFormat}
              originalValue={eventBeginDate ?? new Date()}
              onChange={onChangeBeginDate}
            />
            {/*   <TimeSelect
              placeholder={''}
              options={timeOptions}
              originalValue={{
                value: eventBeginTime.value,
                label: eventBeginTime.label,
              }}
              onChange={onChangeBeginTime}
            /> */}
            <DayOfWeek>
              {eventBeginDate && format(eventBeginDate, 'dd/MM')}
            </DayOfWeek>
          </FormControlFlex>
          <FormControl
            style={{ ...styles.formControl, ...styles.formControlFlex }}
          >
            <AccessTime />
            <Datepicker
              dateFormat={dateFormat}
              originalValue={eventEndDate ?? new Date()}
              onChange={onChangeEndDate}
            />
            <TimeSelect
              placeholder={''}
              options={timeOptions}
              originalValue={{
                value: eventEndTime?.value,
                label: eventEndTime?.label,
              }}
              onChange={onChangeEndTime}
            />
            <DayOfWeek>
              {eventEndDate && format(eventEndDate, 'dd/MM/yy')}
            </DayOfWeek>
          </FormControl>
          <FormControlFlex>
            <Subject style={styles.descriptionIcon} />
            <TextField
              fullWidth={true}
              placeholder="Description"
              multiline
              onChange={(event: any) => {
                setDescriptionTF(event.target.value)
              }}
              value={descriptionTF}
            />
          </FormControlFlex>
        </Form>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleOk} color="primary" disabled={buttonDisabled}>
          save
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default CalendarEventDialog
