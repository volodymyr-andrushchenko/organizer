import { styled } from '@mui/system'
import Grid from '@mui/material/Grid'
import Typography, { TypographyProps } from '@mui/material/Typography'
import { lightBlue } from '@mui/material/colors'

export const Section = styled('section')({
  minHeight: 264,
  minWidth: 240,
  background: 'white',
})

export const Title = styled(Typography)({
  marginLeft: 8,
  textTransform: 'capitalize',
})

export const Navigation = styled(Grid)({
  marginRight: 4,
})

export const DayHeader = styled(Typography)({
  textAlign: 'center',
  fontSize: 12,
  color: lightBlue[800],
  lineHeight: '26px',
  padding: 2,
  borderColor: 'white',
  borderStyle: 'solid',
  textTransform: 'capitalize',
  background: 'white',
  height: 34.3,
  width: 34.3,
})

interface StyledDayProps extends TypographyProps {
  selected: boolean
  today: boolean
  isCurrentMonth: boolean
}

type ElementColors = {
  text: string
  background: string
}

const colors = {
  selected: {
    text: 'white',
    background: lightBlue[500],
  },
  today: {
    text: 'white',
    background: lightBlue[700],
  },
  notCurrentMonth: {
    text: '#888',
    background: 'white',
  },
  default: {
    text: 'black',
    background: 'white',
  },
}

function getDateStyle(
  isSelected: boolean,
  isToday: boolean,
  isCurrentMonth: boolean
): ElementColors {
  if (isSelected) {
    return colors.selected
  }

  if (!isCurrentMonth) {
    return colors.notCurrentMonth
  }

  if (isToday) {
    return colors.today
  }

  return colors.default
}

export const Day = styled(Typography, {
  shouldForwardProp: (propName) =>
    propName !== 'selected' &&
    propName !== 'today' &&
    propName !== 'isCurrentMonth',
})<StyledDayProps>(({ selected, today, isCurrentMonth }) => ({
  textAlign: 'center',
  fontSize: 12,
  cursor: 'pointer',
  borderRadius: '50%',
  border: '1px solid white',
  lineHeight: '26px',
  padding: 4,
  height: 34.3,
  width: 34.3,

  color: getDateStyle(selected, today, isCurrentMonth).text,

  background: getDateStyle(selected, today, isCurrentMonth).background,

  '&:hover': {
    opacity: 0.8,
  },
}))
