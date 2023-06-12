import { styled } from '@mui/system'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { AppTheme, theme } from '../../providers/theme-provider'

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
  color: theme.palette.secondary.dark,
  lineHeight: '26px',
  padding: 2,
  borderColor: 'white',
  borderStyle: 'solid',
  textTransform: 'capitalize',
  background: 'white',
  height: 34.3,
  width: 34.3,
})

type ElementColors = {
  text: string
  background: string
}

const colors = {
  selected: {
    text: 'white',
    // access from outside of provider. This seems wrong. Can write function if needed
    background: theme.palette.secondary.light,
  },
  today: {
    text: 'white',
    background: theme.palette.secondary.main,
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
})<{ selected: boolean; today: boolean; isCurrentMonth: boolean }>(
  ({ selected, today, isCurrentMonth }) => ({
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
  })
)

export const CalendarSmallWrapper = styled('div')(({ theme }) => ({
  marginTop: 75,
  marginRight: theme.spacing(1),
  marginBottom: theme.spacing(4),
  marginLeft: theme.spacing(1),
  minHeight: 265,
  minWidth: 240,
  background: 'white',
}))
