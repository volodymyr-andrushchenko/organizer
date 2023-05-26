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
`

export const Content = styled.div`
  max-width: 445px;
  padding: 150px 0;
`

export const Button = styled(ButtonBase)`
  margin-top: 45px;
`

export const Title = styled.h1`
  font-weight: 700;
  font-size: 36px;
  line-height: 56px;
  max-width: 350px;
`
