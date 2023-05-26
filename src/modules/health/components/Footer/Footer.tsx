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
            accessible on mobile and online for everyone
          </Paragraph>
          <Paragraph>©Trafalgar PTY LTD 2020. All rights reserved</Paragraph>
        </FooterInfo>
        <FooterNav>
          <Links>
            <Link>Company</Link>
            <Link>Company</Link>
            <Link>Company</Link>
            <Link>Company</Link>
            <Link>Company</Link>
          </Links>
          <Links>
            <Link>Company</Link>
            <Link>Company</Link>
            <Link>Company</Link>
            <Link>Company</Link>
            <Link>Company</Link>
          </Links>
          <Links>
            <Link>Company</Link>
            <Link>Company</Link>
            <Link>Company</Link>
            <Link>Company</Link>
            <Link>Company</Link>
          </Links>
        </FooterNav>
      </Container>
    </FooterWrapper>
  )
}

export default Footer
