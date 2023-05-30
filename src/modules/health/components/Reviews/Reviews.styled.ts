import styled from 'styled-components/macro'
import SectionHeaderBase from '../../styled-components/SectionHeader'
import CenteredColumnBase from '../../styled-components/Center'
import SectionHeaderUnderlineBase from '../../styled-components/SectionHeaderUnderline'
import RowBase from '../../styled-components/Row'
import arrowImg from '@/assets/slider/arrow.svg'

export const SectionHeader = SectionHeaderBase

export const ReviewsSection = styled.section``

export const Wrapper = styled.div`
  background: linear-gradient(208.18deg, #67c3f3 9.05%, #5a98f2 76.74%);
  border-radius: 24px;
  padding: 61px 120px 79px;
  margin-top: 259px;

  @media (max-width: 650px) {
    padding: 32px;
  }
`
export const CenteredColumn = CenteredColumnBase

export const SectionHeaderUnderline = SectionHeaderUnderlineBase

export const Row = styled(RowBase)`
  margin-top: 60px;
  flex-wrap: wrap;
  gap: 20px;

  @media (max-width: 650px) {
    margin-top: 20px;
  }
`

export const CustomerImg = styled.img`
  border-radius: 50%;
  border: 4px solid white;
`

export const Customer = styled.div`
  display: flex;
  gap: 29px;
  flex-wrap: wrap;
`

export const CustomerInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const CustomerName = styled.h3`
  font-weight: 700;
  font-size: 22px;
  line-height: 32px;
  color: white;
`

export const CustomerTitle = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 32px;
  color: rgba(255, 255, 255, 0.85);
`

export const CustomerFeedback = styled.blockquote`
  font-weight: 400;
  font-size: 19px;
  line-height: 30px;
  color: rgba(255, 255, 255, 0.9);
  max-width: 420px;

  @media (max-width: 450px) {
    font-size: 14px;
    line-height: 1.4;
  }
`

export const BackArrow = styled.button`
  background-image: url('${arrowImg}');
  border: 0;
  background-color: transparent;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  width: 28px;
  height: 18px;

  &.swiper-button-disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`
export const ForwardArrow = styled(BackArrow)`
  transform: rotate(180deg);
`

export const SwiperControls = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const PaginationIndication = styled.div`
  max-width: max-content;
  margin: 0 20px;
`
