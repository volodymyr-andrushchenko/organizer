import CenteredColumn from '../../styled-components/Center'
import SectionHeaderUnderline from '../../styled-components/SectionHeaderUnderline'
import Paragraph from '../../styled-components/Text'
import {
  Cards,
  Card,
  ImageContainer,
  CardHeader,
  CardImage,
  CenteredParagraph,
  Button,
  SectionHeader,
} from './Services.styled'
import magnifyingGlassImg from '@/assets/services/magglass.svg'
import kitImg from '@/assets/services/kit.svg'
import padImg from '@/assets/services/pad.svg'
import pillsImg from '@/assets/services/pills.svg'
import recordImg from '@/assets/services/record.svg'
import tabletImg from '@/assets/services/tablet.svg'

const Services = () => {
  return (
    <section>
      <CenteredColumn>
        <SectionHeader>Our services</SectionHeader>
        <SectionHeaderUnderline></SectionHeaderUnderline>
        <CenteredParagraph>
          We provide to you the best choiches for you. Adjust it to your health
          needs and make sure your undergo treatment
          <br /> with our highly qualified doctors you can consult with us which
          type of service is suitable for your health
        </CenteredParagraph>
      </CenteredColumn>
      <Cards>
        <Card>
          <ImageContainer>
            <CardImage src={magnifyingGlassImg} alt="" />
          </ImageContainer>
          <CardHeader>Search doctor</CardHeader>
          <Paragraph>
            Choose your doctor from thousands of specialist, general, and
            trusted hospitals
          </Paragraph>
        </Card>
        <Card>
          <ImageContainer>
            <CardImage src={pillsImg} alt="" />
          </ImageContainer>
          <CardHeader>Online pharmacy</CardHeader>
          <Paragraph>
            Buy your medicines with our mobile application with a simple
            delivery system
          </Paragraph>
        </Card>
        <Card>
          <ImageContainer>
            <CardImage src={tabletImg} alt="" />
          </ImageContainer>
          <CardHeader>Consultation</CardHeader>
          <Paragraph>
            Free consultation with our trusted doctors and get the best
            recomendations
          </Paragraph>
        </Card>
        <Card>
          <ImageContainer>
            <CardImage src={padImg} alt="" />
          </ImageContainer>
          <CardHeader>Details info</CardHeader>
          <Paragraph>
            Free consultation with our trusted doctors and get the best
            recomendations
          </Paragraph>
        </Card>
        <Card>
          <ImageContainer>
            <CardImage src={kitImg} alt="" />
          </ImageContainer>
          <CardHeader>Emergency care</CardHeader>
          <Paragraph>
            You can get 24/7 urgent care for yourself or your children and your
            lovely family
          </Paragraph>
        </Card>
        <Card>
          <ImageContainer>
            <CardImage src={recordImg} alt="" />
          </ImageContainer>
          <CardHeader>Tracking</CardHeader>
          <Paragraph>
            Track and save your medical history and health data
          </Paragraph>
        </Card>
      </Cards>
      <CenteredColumn>
        <Button>Learn more</Button>
      </CenteredColumn>
    </section>
  )
}

export default Services
