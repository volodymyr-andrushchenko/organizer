import { useAppSelector } from '@/store/hooks'
import { selectDisplayMessage } from '../state/info-display-slice'

const InfoDisplay = () => {
  const message = useAppSelector(selectDisplayMessage)

  return <h1 style={{ border: '1px solid blue', minHeight: 20 }}>{message}</h1>
}

export default InfoDisplay
