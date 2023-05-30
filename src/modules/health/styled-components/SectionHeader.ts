import styled from 'styled-components/macro'

export type Props = {
  $inverse?: boolean
}

const SectionHeader = styled.h2<Props>`
  font-weight: 700;
  font-size: 36px;
  line-height: 56px;
  color: ${(props) => (props.$inverse ? 'white' : 'black')};

  @media (max-width: 450px) {
    font-size: 28px;
  }
`

export default SectionHeader
