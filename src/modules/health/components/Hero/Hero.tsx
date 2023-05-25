import styled from 'styled-components'
import Button from '../../styled-components/Button'
import backgroundImg from '@/assets/hero/trafalgar-header illustration 1.png'

console.log(backgroundImg)

const Wrapper = styled.section`
  background-image: url('${backgroundImg}');
  background-position: right center;
  background-size: 693px 598px;
`

const Content = styled.div`
  max-width: 445px;
`

const Hero = () => {
  return (
    <Wrapper>
      <Content>
        <h1>Virtual healthcare for you</h1>
        <p>
          Trafalgar provides progressive, and affordable healthcare, accessible
          on mobile and online for everyone
        </p>
        <Button>Lol</Button>
      </Content>
    </Wrapper>
  )
}

export default Hero
