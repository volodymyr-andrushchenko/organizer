import { styled } from '@mui/system'
import FormControlBase from '@mui/material/FormControl'
import IconButtonBase from '@mui/material/IconButton'
import grey from '@mui/material/colors/grey'
import { Typography } from '@mui/material'

export const CloseButtonWrapper = styled('div')({
  position: 'absolute',
  right: 4,
  top: 4,
})

export const FormControl = styled(FormControlBase)({
  marginTop: 8,
})

export const FormControlFlex = styled(FormControl)({
  display: 'inline-flex',
  alignItems: 'center',
  flexDirection: 'row',
  justifyContent: 'flex-start',
})

export const IconButton = styled(IconButtonBase)({
  color: grey[900],
})

export const Form = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  margin: 'auto',
})

export const DayOfWeek = styled(Typography)({
  marginLeft: 4,
  color: grey[500],
})
