import styled from 'styled-components'
import logo from '@/assets/logo/logo.svg'

const Row = styled.div`
  display: flex;
  justify-content: space-between;
`

const LinksList = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
`

const Header = () => {
  return (
    <Row>
      <img src={logo} alt="logo" />
      <LinksList>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Find a doctor</a>
        </li>
        <li>
          <a href="#">Apps</a>
        </li>
        <li>
          <a href="#">Testimonials</a>
        </li>
        <li>
          <a href="#">About us</a>
        </li>
      </LinksList>
    </Row>
  )
}

export default Header
