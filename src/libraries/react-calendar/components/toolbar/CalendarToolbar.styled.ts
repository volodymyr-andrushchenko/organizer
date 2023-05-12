import theme from '../../providers/theme-provider'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/system'

export const RootWrapper = styled('div')({
  flexGrow: 1,
  position: 'fixed',
  backgroundColor: 'white',
  width: '100%',
  borderBottom: '1px solid #E0E0E0',
})

export const Title = styled(Typography)({
  flexGrow: 1,
  paddingLeft: theme.spacing(1),
  fontWeight: 400,
  fontSize: theme.spacing(3),
  textTransform: 'capitalize',
})
