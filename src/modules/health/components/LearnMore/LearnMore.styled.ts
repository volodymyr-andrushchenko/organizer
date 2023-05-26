import styled from 'styled-components/macro'
import leadingProvidersImg from '@/assets/learn-more/trafalgar-illustration sec02 1.png'
import appsBlock from '@/assets/learn-more/trafalgar-illustration sec03 1.png'
import ParagraphBase from '../../styled-components/Text'
import ButtonBase from '../../styled-components/Button'

export const Button = styled(ButtonBase)`
  margin-top: 40px;
`

export const Paragraph = styled(ParagraphBase)`
  margin-top: 31px;
`

export const Block = styled.div`
  display: flex;
  padding: 60px 0 30px;

  background-size: contain;
  background-repeat: no-repeat;

  &:not(:first-child) {
    margin-top: 100px;
  }
`

export const LeadingProvidersBlock = styled(Block)`
  background-image: url('${leadingProvidersImg}');
  justify-content: flex-end;
  background-position: left center;
`

export const AppsBlock = styled(Block)`
  background-image: url('${appsBlock}');
  background-position: right center;
`

export const Content = styled.div`
  max-width: 450px;
`
