import logo from '@/assets/logo/logo.svg'
import { HeaderWrapper, LinksList, LinkItem, Link } from './Header.styled'

const Header = () => {
  return (
    <HeaderWrapper>
      <img src={logo} alt="logo" />
      <LinksList>
        <LinkItem>
          <Link $active href="#">
            Home
          </Link>
        </LinkItem>
        <LinkItem>
          <Link href="#">Find a doctor</Link>
        </LinkItem>
        <LinkItem>
          <Link href="#">Apps</Link>
        </LinkItem>
        <LinkItem>
          <Link href="#">Testimonials</Link>
        </LinkItem>
        <LinkItem>
          <Link href="#">About us</Link>
        </LinkItem>
      </LinksList>
    </HeaderWrapper>
  )
}

export default Header
