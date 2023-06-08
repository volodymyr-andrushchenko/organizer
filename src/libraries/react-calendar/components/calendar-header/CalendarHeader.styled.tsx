import { styled } from '@mui/system'
import Grid from '@mui/material/Grid'

export const HeaderContainer = styled(Grid)({
  height: 100,
})

export const TimeColumnContainer = styled(Grid)({
  color: 'black',
  backgroundColor: 'transparent',
  height: 'auto',
  overflowY: 'hidden',
  flex: 'none',
  display: 'flex',
  alignItems: 'flex-start',
  width: 40,
  marginTop: -8,
  position: 'relative',
  webkitBoxSizing: 'border-box',
  marginLeft: 'auto',
})

export const TimeColumnElement = styled(Grid)({
  position: 'relative',
  height: 60,
  paddingRight: 8,
  textAlign: 'right',
  color: '#70757a',
  fontSize: 12,
})

export const HeaderFirstColumn = styled('div')({
  height: 15,
  marginTop: 85,
  paddingLeft: 8,
  borderRight: '1px solid #dadce0',
})

export const Board = styled(Grid)({
  minWidth: '100%',
  height: '100%',
  flex: 'none',
  verticalAlign: 'top',
  overflow: 'hidden',
  position: 'relative',
})

export const HeaderColumn = styled(Grid)({
  position: 'relative',
  height: 15,
  marginTop: 85,
})

export const HeaderLabelsFirst = styled('div')({
  position: 'absolute',
  top: -75,
  left: -1,
  height: 20,
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 11,
  color: '#70757a',
  fontWeight: 500,
  textTransform: 'uppercase',
})

export const HeaderLabelsSecond = styled(HeaderLabelsFirst)({
  top: -55,
  left: -1,
  height: 45,
  fontSize: 24,
})

export const Today = styled('span')(({ theme }) => ({
  width: 45,
  height: 45,
  lineHeight: '45px',
  borderColor: theme.palette.secondary.main,
  backgroundColor: theme.palette.secondary.main,
  color: '#ffffff',
  border: '1px solid',
  borderRadius: '100%',
  textAlign: 'center',
  cursor: 'pointer',
  '&:hover': {
    borderColor: theme.palette.secondary.dark,
    backgroundColor: theme.palette.secondary.dark,
  },
}))

export const NotToday = styled(Today)({
  borderColor: 'transparent',
  backgroundColor: 'white',
  color: 'black',
  '&:hover': {
    backgroundColor: 'gray',
    borderColor: 'transparent',
  },
})
