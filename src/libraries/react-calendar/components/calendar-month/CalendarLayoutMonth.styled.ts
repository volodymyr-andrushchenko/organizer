import { styled } from '@mui/system'

export const Paper = styled('div', {
  shouldForwardProp: (propName) => propName !== 'weekend',
})<{ weekend: boolean }>(({ weekend, theme }) => ({
  borderBottom: '1px solid #dadce0',
  borderRight: '1px solid #dadce0',
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  backgroundColor: weekend ? 'lightgray' : 'white',
  borderRadius: 0,
  minWidth: 64.38,
}))

export const Today = styled('span')(({ theme }) => ({
  color: theme.palette.background.paper,
  backgroundColor: theme.palette.secondary.main,
  borderRadius: '50%',
  padding: theme.spacing(1),
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: theme.palette.secondary.dark,
  },
}))

export const EventsContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-start',
  flexDirection: 'column',
  textAlign: 'left',
  backgroundColor: 'transparent',
  position: 'relative',
  height: 'calc(100% - 25px)',
  width: '100%',
  marginTop: theme.spacing(1),
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
}))

export const MonthMarker = styled('div')({
  overflow: 'hidden',
  minHeight: 23,
  border: '1px solid rgba(66, 165, 245, 0.8)',
  backgroundColor: 'rgba(66, 165, 245, 0.8)',
  padding: '1px 3px',
  marginBottom: 2,
  borderRadius: 3,
  borderTopRightRadius: 3,
  cursor: 'pointer',
  zIndex: 50,
  '&:hover': {
    zIndex: 53,
    backgroundColor: 'rgba(66, 165, 245, 1)',
  },
})

// today: {
//   color: theme.palette.background.paper,
//   backgroundColor: lightBlue[700],
//   borderRadius: '50%',
//   padding: theme.spacing(1),
//   cursor: 'pointer',
//   '&:hover': {
//     backgroundColor: lightBlue[800],
//   },
// },

// eventsContainer: {
//   display: 'flex',
//   justifyContent: 'flex-start',
//   flexDirection: 'column',
//   textAlign: 'left',
//   backgroundColor: 'transparent',
//   position: 'relative',
//   height: 'calc(100% - 25px)',
//   width: '100%',
//   marginTop: theme.spacing(1),
//   overflow: 'hidden',
//   whiteSpace: 'nowrap',
//   textOverflow: 'ellipsis',
// },
// monthMarker: {
//   overflow: 'hidden',
//   minHeight: 23,
//   border: '1px solid rgba(66, 165, 245, 0.8)',
//   backgroundColor: 'rgba(66, 165, 245, 0.8)',
//   padding: '1px 3px',
//   marginBottom: 2,
//   borderRadius: 3,
//   borderTopRightRadius: 3,
//   cursor: 'pointer',
//   zIndex: 50,
//   '&:hover': {
//     zIndex: 53,
//     backgroundColor: 'rgba(66, 165, 245, 1)',
//   },
// },
