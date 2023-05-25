import Header from './Header/Header'
import Articles from './Articles/Articles'
import Footer from './Footer/Footer'
import Hero from './Hero/Hero'
import LearnMore from './LearnMore/LearnMore'
import Reviews from './Reviews/Reviews'
import Services from './Services/Services'
import styled from 'styled-components'

const Wrapper = styled.div`
  max-width: 1120px;
  margin: auto;
  font-family: 'Mulish', sans-serif;
`

const Health = () => {
  return (
    <Wrapper>
      <Header />
      <Hero />
      <Services />
      <LearnMore />
      <Reviews />
      <Articles />
      <Footer />
    </Wrapper>
  )
}

export default Health
