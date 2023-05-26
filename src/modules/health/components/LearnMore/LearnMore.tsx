import {
  LeadingProvidersBlock,
  AppsBlock,
  Content,
  Paragraph,
  Button,
} from './LearnMore.styled'
import SectionHeader from '../../styled-components/SectionHeader'
import SectionHeaderUnderline from '../../styled-components/SectionHeaderUnderline'

const LearnMore = () => {
  return (
    <section>
      <LeadingProvidersBlock>
        <Content>
          <SectionHeader>Leading healthcare providers</SectionHeader>
          <SectionHeaderUnderline />
          <Paragraph>
            Trafalgar provides progressive, and affordable healthcare,
            accessible on mobile and online for everyone. To us, it’s not just
            work. We take pride in the solutions we deliver
          </Paragraph>
          <Button>Learn more</Button>
        </Content>
      </LeadingProvidersBlock>
      <AppsBlock>
        <Content>
          <SectionHeader>Leading healthcare providers</SectionHeader>
          <SectionHeaderUnderline />
          <Paragraph>
            Trafalgar provides progressive, and affordable healthcare,
            accessible on mobile and online for everyone. To us, it’s not just
            work. We take pride in the solutions we deliver
          </Paragraph>
          <Button>Learn more</Button>
        </Content>
      </AppsBlock>
    </section>
  )
}

export default LearnMore
