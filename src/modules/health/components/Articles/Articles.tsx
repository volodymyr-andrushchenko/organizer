import {
  Wrapper,
  CenteredColumn,
  SectionHeader,
  SectionHeaderUnderline,
  ArticlesList,
  Article,
  ArticleImage,
  ArticleContent,
  ArticleHeader,
  Paragraph,
  Link,
  Button,
} from './Articles.styled'
import bloodImg from '@/assets/articles/image 1.png'
import microscopeImg from '@/assets/articles/image 2.png'
import spaImg from '@/assets/articles/image 3.png'

const Articles = () => {
  return (
    <Wrapper>
      <CenteredColumn>
        <SectionHeader>Check out our latest article</SectionHeader>
        <SectionHeaderUnderline />
      </CenteredColumn>
      <ArticlesList>
        <Article>
          <ArticleImage src={bloodImg} />
          <ArticleContent>
            <ArticleHeader>
              Disease detection, check up in the laboratory
            </ArticleHeader>
            <Paragraph>
              In this case, the role of the health laboratory is very important
              to do a disease detection...
            </Paragraph>
            <Link href="#">Read more</Link>
          </ArticleContent>
        </Article>
        <Article>
          <ArticleImage src={microscopeImg} />
          <ArticleContent>
            <ArticleHeader>
              Herbal medicines that are safe for consumption
            </ArticleHeader>
            <Paragraph>
              In this case, the role of the health laboratory is very important
              to do a disease detection...
            </Paragraph>
            <Link href="#">Read more</Link>
          </ArticleContent>
        </Article>
        <Article>
          <ArticleImage src={spaImg} />
          <ArticleContent>
            <ArticleHeader>Natural care for healthy facial skin</ArticleHeader>
            <Paragraph>
              In this case, the role of the health laboratory is very important
              to do a disease detection...
            </Paragraph>
            <Link href="#">Read more</Link>
          </ArticleContent>
        </Article>
      </ArticlesList>
      <CenteredColumn>
        <Button>View all</Button>
      </CenteredColumn>
    </Wrapper>
  )
}
export default Articles
