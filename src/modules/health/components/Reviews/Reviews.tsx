import {
  Wrapper,
  SectionHeader,
  CenteredColumn,
  SectionHeaderUnderline,
  CustomerImg,
  Customer,
  CustomerInfo,
  CustomerName,
  CustomerTitle,
  Row,
  CustomerFeedback,
} from './Reviews.styled'
import customerImg from '@/assets/reviews/image 1.png'
import SliderControls from './components/SliderControls'

const Reviews = () => {
  return (
    <section>
      <Wrapper>
        <CenteredColumn>
          <SectionHeader $inverse>What our customer are saying</SectionHeader>
          <SectionHeaderUnderline $inverse />
        </CenteredColumn>
        <Row>
          <Customer>
            <CustomerImg src={customerImg} />
            <CustomerInfo>
              <CustomerName>Edward Newgate</CustomerName>
              <CustomerTitle>Founder Circle</CustomerTitle>
            </CustomerInfo>
          </Customer>
          <CustomerFeedback>
            “Our dedicated patient engagement app and web portal allow you to
            access information instantaneously (no tedeous form, long calls, or
            administrative hassle) and securely”
          </CustomerFeedback>
        </Row>
      </Wrapper>
      <SliderControls slidesCount={4} current={0} />
    </section>
  )
}

export default Reviews
