import styled from 'styled-components/macro'
import ButtonBase from '../../styled-components/Button'
import backgroundImg from '@/assets/hero/trafalgar-header illustration 1.png'
import ParagraphBase from '../../styled-components/Text'

export const Paragraph = styled(ParagraphBase)`
  margin-top: 25px;
  font-size: 21px;
  line-height: 32px;
`

export const Wrapper = styled.section`
  background-image: url('${backgroundImg}');
  background-position: right center;
  background-size: contain;
  background-repeat: no-repeat;
  background-size: 693px 598px;

  @media (max-width: 1000px) {
    background-size: 400px;
    background-position: top;
  }
`

export const Content = styled.div`
  max-width: 445px;
  padding: 130px 0 180px;

  @media (max-width: 1000px) {
    padding-top: 400px;
    margin: auto;
    padding-bottom: 40px;
  }
`

export const Button = styled(ButtonBase)`
  margin-top: 49px;
  padding: 16px 38px;

  @media (max-width: 480px) {
    display: block;
    margin: 20px auto 0;
  }
`

export const Title = styled.h1`
  font-weight: 700;
  font-size: 48px;
  line-height: 56px;
`
