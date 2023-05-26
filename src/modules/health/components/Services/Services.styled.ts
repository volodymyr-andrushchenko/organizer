import styled from 'styled-components/macro'
import Paragraph from '../../styled-components/Text'
import ButtonBase from '../../styled-components/Button'
import SectionHeaderBase from '../../styled-components/SectionHeader'

export const SectionHeader = styled(SectionHeaderBase)`
  margin-top: 150px;
`

export const Button = styled(ButtonBase)`
  margin-top: 72px;
`

export const Cards = styled.ul`
  list-style: none;
  display: flex;
  gap: 37px 34px;
  flex-wrap: wrap;
  margin-top: 80px;
`

export const Card = styled.li`
  background-color: white;
  border-radius: 20px;
  min-height: 354px;
  padding: 0 40px;
  box-shadow: 10px 40px 50px rgba(229, 233, 246, 0.4);
  width: 350px;
`

export const ImageContainer = styled.div`
  min-height: 187px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const CardImage = styled.img`
  max-width: 90px;
  max-height: 90px;
`

export const CardHeader = styled.h3`
  font-weight: 700;
  font-size: 24px;
  line-height: 56px;
`

export const CenteredParagraph = styled(Paragraph)`
  text-align: center;
  padding: 0 84px;
  margin-top: 33px;
`
