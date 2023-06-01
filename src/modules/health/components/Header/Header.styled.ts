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
  /* this causes layout shift */
  font-weight: ${(props) => (props.$active ? '700' : '400')};
  /* ----- */
  font-size: 18px;
  line-height: 23px;
  color: #1f1534;
  opacity: ${(props) => (props.$active ? '1' : '0.4')};
  transition: 0.3s ease-in-out;

  /* this is to negate layout shift */
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  /* ----- */

  &:hover {
    opacity: 0.8;
  }

  /* https://css-tricks.com/bold-on-hover-without-the-layout-shift/ */
  &::after {
    content: attr(data-text);
    content: attr(data-text) / '';
    height: 0;
    visibility: hidden;
    overflow: hidden;
    user-select: none;
    pointer-events: none;
    font-weight: 700;

    @media speech {
      display: none;
    }
  }
`
