import styled from 'styled-components'

type Props = {
  $primary?: boolean
}

const Button = styled.button<Props>`
  background-color: ${(props) => (props.$primary ? '#458FF6' : 'white')};
  color: ${(props) => (props.$primary ? 'white' : '#458FF6')};
  border: 1.4px solid #458ff6;
  border-radius: 55px;
  padding: 15px 50px;
`

export default Button
