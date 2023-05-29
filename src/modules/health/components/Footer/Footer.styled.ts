import styled from 'styled-components/macro'
import { ContainerBigger as ContainerBase } from '../Health.styled'
import ParagraphBase from '../../styled-components/Text'

export const Paragraph = styled(ParagraphBase)`
  color: white;
  font-size: 18px;
  line-height: 28px;
  max-width: 391px;
  margin-top: 13px;

  &:not(:first-of-type) {
    margin-top: 28px;
    font-size: 16px;
    line-height: 28px;
  }
`

export const FooterWrapper = styled.footer`
  background: linear-gradient(183.41deg, #67c3f3 -8.57%, #5a98f2 82.96%);
  padding: 118px 0;
  margin-top: 201px;
`

export const Container = styled(ContainerBase)`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 48px;
`

export const FooterInfo = styled.div``

export const FooterNav = styled.nav`
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
  max-width: 682px;
  padding-right: 50px;
  transform: translateY(-7px);
  gap: 30px;

  @media (max-width: 550px) {
    padding: 0;
    transform: none;
    place-content: center;
    flex-wrap: wrap;
  }
`

export const Links = styled.ul``

export const Link = styled.li`
  list-style: none;
  font-weight: 300;
  font-size: 18px;
  line-height: 38px;
  color: #ffffff;

  &:first-child {
    font-weight: 700;
    font-size: 20px;
    line-height: 60px;
    color: #ffffff;
  }
`
