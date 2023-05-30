import {
  FooterWrapper,
  Container,
  Paragraph,
  FooterInfo,
  FooterNav,
  Links,
  Link,
} from './Footer.styled'
import logoWhite from '@/assets/logo/logo-white.svg'

const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <FooterInfo>
          <img src={logoWhite} alt="logo" />
          <Paragraph>
            Trafalgar provides progressive, and affordable healthcare,
            accessible on mobile and online for&nbsp;everyone
          </Paragraph>
          <Paragraph>©Trafalgar PTY LTD 2020. All rights reserved</Paragraph>
        </FooterInfo>
        <FooterNav>
          <Links>
            <Link>Company</Link>
            <Link>About</Link>
            <Link>Testimonials</Link>
            <Link>Find a doctor</Link>
            <Link>Apps</Link>
          </Links>
          <Links>
            <Link>Region</Link>
            <Link>Indonesia</Link>
            <Link>Singapore</Link>
            <Link>Hongkong</Link>
            <Link>Canada</Link>
          </Links>
          <Links>
            <Link>Help</Link>
            <Link>Help center</Link>
            <Link>Contact support</Link>
            <Link>Instructions</Link>
            <Link>How it works</Link>
          </Links>
        </FooterNav>
      </Container>
    </FooterWrapper>
  )
}

export default Footer
