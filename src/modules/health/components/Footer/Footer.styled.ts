import styled from 'styled-components/macro'
import { Container as ContainerBase } from '../Health.styled'
import ParagraphBase from '../../styled-components/Text'

export const Paragraph = styled(ParagraphBase)`
  color: white;
  line-height: 28px;
  max-width: 391px;
  margin-top: 17px;
`

export const FooterWrapper = styled.footer`
  background: linear-gradient(183.41deg, #67c3f3 -8.57%, #5a98f2 82.96%);
  padding: 125px 0;
  margin-top: 150px;
`

export const Container = styled(ContainerBase)`
  display: flex;
  justify-content: space-between;
`

export const FooterInfo = styled.div``

export const FooterNav = styled.nav`
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
  max-width: 500px;
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
    margin-bottom: 20px;
  }
`
