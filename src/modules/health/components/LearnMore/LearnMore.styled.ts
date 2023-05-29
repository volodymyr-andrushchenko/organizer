import styled from 'styled-components/macro'
import leadingProvidersImg from '@/assets/learn-more/trafalgar-illustration sec02 1.png'
import appsBlock from '@/assets/learn-more/trafalgar-illustration sec03 1.png'
import ParagraphBase from '../../styled-components/Text'
import ButtonBase from '../../styled-components/Button'
import SectionHeaderBase from '../../styled-components/SectionHeader'
import SectionHeaderUnderlineBase from '../../styled-components/SectionHeaderUnderline'
import downArrow from '@/assets/ui/down-arrow.svg'

export const Wrapper = styled.section`
  margin-top: 222px;
`

export const SectionHeader = SectionHeaderBase

export const SectionHeaderApp = styled(SectionHeaderBase)`
  line-height: 48px;
`

export const SectionHeaderUnderline = SectionHeaderUnderlineBase

export const Button = styled(ButtonBase)`
  margin-top: 40px;
`

export const DownloadButton = styled(Button)`
  background-image: url('${downArrow}');
  background-repeat: no-repeat;
  background-position: right 44px center;
  padding-left: 45px;
  padding-right: 70px;
`

export const Paragraph = styled(ParagraphBase)`
  margin-top: 31px;
  font-size: 18px;
  line-height: 30px;
`

export const Block = styled.div`
  display: flex;
  padding: 60px 0 30px;

  background-size: contain;
  background-repeat: no-repeat;

  &:not(:first-child) {
    margin-top: 210px;
  }
`

export const Content = styled.div`
  max-width: 400px;
`

export const LeadingProvidersBlock = styled(Block)`
  background-image: url('${leadingProvidersImg}');
  justify-content: flex-end;
  background-position: left center;
  padding-right: 83px;
`

export const AppsBlock = styled(Block)`
  background-image: url('${appsBlock}');
  background-position: right center;
  padding-left: 89px;

  & ${Content} {
    max-width: 366px;
  }
`
