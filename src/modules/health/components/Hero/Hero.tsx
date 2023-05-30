import { Wrapper, Content, Button, Title, Paragraph } from './Hero.styled'

const Hero = () => {
  return (
    <Wrapper>
      <Content>
        <Title>Virtual healthcare for you</Title>
        <Paragraph>
          Trafalgar provides progressive, and affordable healthcare, accessible
          on mobile and online for&nbsp;everyone
        </Paragraph>
        <Button $primary>Consult today</Button>
      </Content>
    </Wrapper>
  )
}

export default Hero
