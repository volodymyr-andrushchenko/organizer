import styled from 'styled-components/macro'
import SectionHeaderBase from '../../styled-components/SectionHeader'
import CenteredColumnBase from '../../styled-components/Center'
import SectionHeaderUnderlineBase from '../../styled-components/SectionHeaderUnderline'
import RowBase from '../../styled-components/Row'

export const SectionHeader = SectionHeaderBase

export const Wrapper = styled.div`
  background: linear-gradient(208.18deg, #67c3f3 9.05%, #5a98f2 76.74%);
  border-radius: 24px;
  padding: 61px 120px 79px;
  margin-top: 259px;
`
export const CenteredColumn = CenteredColumnBase

export const SectionHeaderUnderline = SectionHeaderUnderlineBase

export const Row = styled(RowBase)`
  margin-top: 60px;
`

export const CustomerImg = styled.img`
  border-radius: 50%;
  border: 4px solid white;
`

export const Customer = styled.div`
  display: flex;
  gap: 20px;
`

export const CustomerInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 10px;
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
  line-height: 48px;
  color: rgba(255, 255, 255, 0.85);
`

export const CustomerFeedback = styled.blockquote`
  font-weight: 400;
  font-size: 19px;
  line-height: 30px;
  color: rgba(255, 255, 255, 0.9);
  max-width: 420px;
`
