import {
  LeadingProvidersBlock,
  AppsBlock,
  Content,
  Paragraph,
  Button,
  SectionHeader,
  SectionHeaderUnderline,
  DownloadButton,
  Wrapper,
  SectionHeaderApp,
} from './LearnMore.styled'

const LearnMore = () => {
  return (
    <Wrapper>
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
          <SectionHeaderApp>Download our mobile apps</SectionHeaderApp>
          <SectionHeaderUnderline />
          <Paragraph>
            Our dedicated patient engagement app and web portal allow you to
            access information instantaneously (no tedeous form, long calls, or
            administrative hassle) and securely
          </Paragraph>
          <DownloadButton>Download</DownloadButton>
        </Content>
      </AppsBlock>
    </Wrapper>
  )
}

export default LearnMore
