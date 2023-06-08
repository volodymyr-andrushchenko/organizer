import { styled } from '@mui/system'
import Grid from '@mui/material/Grid'

export const Board = styled(Grid)({
  minWidth: '100%',
  height: '100%',
  flex: 'none',
  verticalAlign: 'top',
  overflow: 'hidden',
  position: 'relative',
})

export const ColumnDivisor = styled('div')({
  height: '100%',
  paddingLeft: 8,
  borderRight: '1px solid #dadce0',
})

export const DayContainer = styled(Grid)({
  borderRight: '1px solid #dadce0',
  position: 'relative',
  paddingRight: 12,
  flex: '1 1 auto',
  height: '100%',
})

export const CurrentTimeDot = styled('div')({
  background: 'rgb(226, 57, 43)',
  borderRadius: '50%',
  content: "''",
  position: 'absolute',
  height: 12,
  width: 12,
  zIndex: 52,
  marginTop: -1000,
  marginLeft: -6.5,
})

export const CurrentTimeLine = styled('div')({
  position: 'absolute',
  zIndex: 51,
  borderTop: '2px solid rgb(226, 57, 43)',
  left: 0,
  right: -1,
})

export const EventsContainer = styled('div')({
  backgroundColor: 'transparent',
  position: 'relative',
  height: '100%',
  width: '100%',
})
