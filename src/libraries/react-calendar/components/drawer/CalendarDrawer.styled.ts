import { styled } from '@mui/system'
import theme from '../../providers/theme-provider'

export const CalendarSmallWrapper = styled('div')({
  marginTop: 75,
  marginRight: theme.spacing(1),
  marginBottom: theme.spacing(4),
  marginLeft: theme.spacing(1),
  minHeight: 265,
  minWidth: 240,
  background: 'white',
})
