import styled from 'styled-components/macro'
import RowBase from '../../styled-components/Row'

export const HeaderWrapper = styled(RowBase)`
  padding: 70px 0;
`

export const LinksList = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
`
export const LinkItem = styled.li`
  &:not(:first-child) {
    margin-left: 40px;
  }
`
type LinkProps = {
  $active?: boolean
}

export const Link = styled.a<LinkProps>`
  text-decoration: none;
  font-weight: ${(props) => (props.$active ? '700' : '400')};
  font-size: 18px;
  line-height: 23px;
  color: #1f1534;
  opacity: ${(props) => (props.$active ? '1' : '0.4')};
`
