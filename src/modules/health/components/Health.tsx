import '../style/global.css'
import Header from './Header/Header'
import Articles from './Articles/Articles'
import Footer from './Footer/Footer'
import Hero from './Hero/Hero'
import LearnMore from './LearnMore/LearnMore'
import Reviews from './Reviews/Reviews'
import Services from './Services/Services'
import { Root, Container, ContainerBigger } from './Health.styled'

const Health = () => {
  return (
    <Root>
      <ContainerBigger>
        <Header />
        <Hero />
      </ContainerBigger>
      <Container>
        <Services />
      </Container>
      <ContainerBigger>
        <LearnMore />
      </ContainerBigger>
      <Container>
        <Reviews />
        <Articles />
      </Container>
      <Footer />
    </Root>
  )
}

export default Health
