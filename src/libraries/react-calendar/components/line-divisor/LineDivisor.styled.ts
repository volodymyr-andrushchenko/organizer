import { styled } from '@mui/system'

export const LineDivisor = styled('div')({
  height: 60,
  '&:after': {
    content: "''",
    borderBottom: '1px solid #dadce0',
    position: 'absolute',
    width: '100%',
    marginTop: -1,
    zIndex: 3,
    pointerEvents: 'none',
  },
})
