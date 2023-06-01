import logo from '@/assets/logo/logo.svg'
import { useState } from 'react'
import { HeaderWrapper, LinksList, LinkItem, Link } from './Header.styled'

const LINKS = [
  { id: 1, text: 'Home' },
  { id: 2, text: 'Find a doctor' },
  { id: 3, text: 'Apps' },
  { id: 4, text: 'Testimonials' },
  { id: 5, text: 'About us' },
] as const

const Header = () => {
  const [currentPage, setCurrentPage] = useState<number>(1)

  return (
    <HeaderWrapper>
      <img src={logo} alt="logo" />
      <LinksList>
        {LINKS.map((link) => (
          <LinkItem key={link.id}>
            <Link
              onClick={() => setCurrentPage(link.id)}
              $active={currentPage === link.id}
              href="#"
              data-text={link.text} // this is for css attr()
            >
              {link.text}
            </Link>
          </LinkItem>
        ))}
      </LinksList>
    </HeaderWrapper>
  )
}

export default Header
