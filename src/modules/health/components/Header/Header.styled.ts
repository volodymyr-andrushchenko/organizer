import styled from 'styled-components/macro'
import RowBase from '../../styled-components/Row'

export const HeaderWrapper = styled(RowBase)`
  padding: 56px 0;
  align-items: center;
  flex-wrap: wrap;
  gap: 32px;
`

export const LinksList = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  transform: translateY(5px);
  place-content: center;
  flex-wrap: wrap;
  gap: 42px;

  @media (max-width: 750px) {
    transform: none;
  }
`

export const LinkItem = styled.li``

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
