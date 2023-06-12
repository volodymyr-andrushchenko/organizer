import { styled } from '@mui/system'
import Grid from '@mui/material/Grid'

export const Body = styled(Grid)({
  height: '100%',
  width: '100%',
  overflowX: 'scroll',
  overflow: 'scroll',
  alignItems: 'stretch',
})

export const TimeColumnContainer = styled(Grid)({
  backgroundColor: 'transparent',
  height: 'auto',
  overflowY: 'hidden',
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'flex-start',
  minWidth: 40,
  maxWidth: 40,
  marginTop: -8,
})

export const TimeColumnElement = styled('div')({
  position: 'relative',
  height: 60,
  paddingRight: 8,
  textAlign: 'right',
  color: '#70757a',
  fontSize: 12,
})
