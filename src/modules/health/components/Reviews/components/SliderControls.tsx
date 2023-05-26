import {
  BackArrow,
  ForwardArrow,
  Row,
  SlideIndicator,
  Wrapper,
} from './SliderControls.styled'

type Props = {
  slidesCount: number
  current: number
}

const SliderControls = ({ slidesCount, current }: Props) => {
  return (
    <Wrapper>
      <BackArrow $disabled />
      <Row>
        {[...Array(slidesCount).keys()].map((index) => (
          <SlideIndicator key={index} $current={index === current} />
        ))}
      </Row>
      <ForwardArrow />
    </Wrapper>
  )
}

export default SliderControls
