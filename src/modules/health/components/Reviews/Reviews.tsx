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
  ReviewsSection,
  ForwardArrow,
  BackArrow,
  SwiperControls,
  PaginationIndication,
} from './Reviews.styled'
import customerImg from '@/assets/reviews/image 1.png'

import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

// import required modules
import { Pagination, Navigation } from 'swiper'

const Reviews = () => {
  return (
    <ReviewsSection>
      <Swiper
        pagination={{
          el: '.my-pagination',
        }}
        navigation={{
          prevEl: '.prev-slide',
          nextEl: '.next-slide',
        }}
        spaceBetween={20}
        modules={[Pagination, Navigation]}
      >
        <SwiperSlide>
          <Wrapper>
            <CenteredColumn>
              <SectionHeader $inverse>
                What our customer are saying
              </SectionHeader>
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
                “Our dedicated patient engagement app and web portal allow you
                to access information instantaneously (no tedeous form, long
                calls, or administrative hassle) and securely”
              </CustomerFeedback>
            </Row>
          </Wrapper>
        </SwiperSlide>
        <SwiperSlide>
          <Wrapper>
            <CenteredColumn>
              <SectionHeader $inverse>
                What our customer are saying
              </SectionHeader>
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
                “Our dedicated patient engagement app and web portal allow you
                to access information instantaneously (no tedeous form, long
                calls, or administrative hassle) and securely”
              </CustomerFeedback>
            </Row>
          </Wrapper>
        </SwiperSlide>
      </Swiper>
      <SwiperControls className="controls">
        <BackArrow className="prev-slide"></BackArrow>
        <PaginationIndication className="my-pagination"></PaginationIndication>
        <ForwardArrow className="next-slide"></ForwardArrow>
      </SwiperControls>
    </ReviewsSection>
  )
}

export default Reviews
