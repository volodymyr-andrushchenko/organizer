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
import MagnifyingGlass from '@/assets/services/magglass.svg'

const Services = () => {
  return (
    <section>
      <CenteredColumn>
        <SectionHeader>Our services</SectionHeader>
        <SectionHeaderUnderline></SectionHeaderUnderline>
        <CenteredParagraph>
          We provide to you the best choiches for you. Adjust it to your health
          needs and make sure your undergo treatment with our highly qualified
          doctors you can consult with us which type of service is suitable for
          your health
        </CenteredParagraph>
      </CenteredColumn>
      <Cards>
        <Card>
          <ImageContainer>
            <CardImage src={MagnifyingGlass} alt="" />
          </ImageContainer>
          <CardHeader>Search doctor</CardHeader>
          <Paragraph>
            Choose your doctor from thousands of specialist, general, and
            trusted hospitals
          </Paragraph>
        </Card>
        <Card>
          <ImageContainer>
            <CardImage src={MagnifyingGlass} alt="" />
          </ImageContainer>
          <CardHeader>Search doctor</CardHeader>
          <Paragraph>
            Choose your doctor from thousands of specialist, general, and
            trusted hospitals
          </Paragraph>
        </Card>
        <Card>
          <ImageContainer>
            <CardImage src={MagnifyingGlass} alt="" />
          </ImageContainer>
          <CardHeader>Search doctor</CardHeader>
          <Paragraph>
            Choose your doctor from thousands of specialist, general, and
            trusted hospitals
          </Paragraph>
        </Card>
        <Card>
          <ImageContainer>
            <CardImage src={MagnifyingGlass} alt="" />
          </ImageContainer>
          <CardHeader>Search doctor</CardHeader>
          <Paragraph>
            Choose your doctor from thousands of specialist, general, and
            trusted hospitals
          </Paragraph>
        </Card>
        <Card>
          <ImageContainer>
            <CardImage src={MagnifyingGlass} alt="" />
          </ImageContainer>
          <CardHeader>Search doctor</CardHeader>
          <Paragraph>
            Choose your doctor from thousands of specialist, general, and
            trusted hospitals
          </Paragraph>
        </Card>
        <Card>
          <ImageContainer>
            <CardImage src={MagnifyingGlass} alt="" />
          </ImageContainer>
          <CardHeader>Search doctor</CardHeader>
          <Paragraph>
            Choose your doctor from thousands of specialist, general, and
            trusted hospitals
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
