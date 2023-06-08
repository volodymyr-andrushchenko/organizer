import { styled } from '@mui/system'

export const Marker = styled('div')({
  overflow: 'hidden',
  position: 'absolute',
  border: '1px solid rgba(66, 165, 245, 0.8)',
  backgroundColor: 'rgba(66, 165, 245, 0.8)',
  padding: '1px 3px',
  borderRadius: 3,
  borderTopRightRadius: 3,
  cursor: 'pointer',
  zIndex: 50,
  '&:hover': {
    zIndex: 53,
    backgroundColor: 'rgba(66, 165, 245, 1)',
  },
  minHeight: 24,
})

export const MarkerText = styled('div')({
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
})

export const BeginEnd = styled('div')({
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  fontSize: 10,
})
