import styled from 'styled-components/macro'
import { Props } from './SectionHeader'

const SectionHeaderUnderline = styled.div<Props>`
  width: 56px;
  height: 2px;
  border-radius: 10px;
  background-color: ${(props) => (props.$inverse ? 'white' : 'black')};
  margin-top: 26px;
`
export default SectionHeaderUnderline
