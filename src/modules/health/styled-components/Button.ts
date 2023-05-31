import styled from 'styled-components/macro'

type Props = {
  $primary?: boolean
}

const Button = styled.button<Props>`
  background-color: ${(props) => (props.$primary ? '#458FF6' : 'transparent')};
  color: ${(props) => (props.$primary ? 'white' : '#458FF6')};
  border: 1.4px solid #458ff6;
  border-radius: 55px;
  padding: 16px 50px;
  font-weight: 700;
  font-size: 18px;
  transition: 0.3s ease-in-out;

  &:hover {
    background-color: ${(props) =>
      props.$primary ? 'transparent' : '#458FF6'};
    color: ${(props) => (props.$primary ? '#458FF6' : 'white')};
  }
`

export default Button
