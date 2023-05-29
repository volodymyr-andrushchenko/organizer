import styled from 'styled-components/macro'
import CenteredColumnBase from '../../styled-components/Center'
import SectionHeaderBase from '../../styled-components/SectionHeader'
import SectionHeaderUnderlineBase from '../../styled-components/SectionHeaderUnderline'
import ParagraphBase from '../../styled-components/Text'
import ButtonBase from '../../styled-components/Button'
import rightArrow from '@/assets/ui/arrow-right-sm.svg'

export const Button = styled(ButtonBase)`
  margin-top: 67px;
  padding: 16px 65px;
`

export const Wrapper = styled.div`
  margin-top: 220px;
`

export const Paragraph = styled(ParagraphBase)`
  font-size: 16px;
  line-height: 28px;
  margin-top: 12px;
`

export const CenteredColumn = CenteredColumnBase

export const SectionHeader = SectionHeaderBase

export const SectionHeaderUnderline = SectionHeaderUnderlineBase

export const ArticlesList = styled.ul`
  list-style: none;
  display: flex;
  gap: 34px;
  margin-top: 78px;
`
export const Article = styled.li`
  background: #ffffff;
  box-shadow: 10px 40px 50px rgba(229, 233, 246, 0.4);
  border-radius: 20px;
  max-width: 350px;
`

export const ArticleImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 240px;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
`

export const ArticleContent = styled.div`
  padding: 20px 40px 42px 35px;
`

export const ArticleHeader = styled.h3`
  font-weight: 700;
  font-size: 21px;
  line-height: 32px;
`
export const Link = styled.a`
  display: block;
  text-decoration: none;
  color: #4089ed;
  margin-top: 25px;
  max-width: max-content;
  padding-right: 29px;

  background-image: url('${rightArrow}');
  background-repeat: no-repeat;
  background-position: right center;

  font-weight: 600;
  font-size: 17px;
  line-height: 28px;
`
