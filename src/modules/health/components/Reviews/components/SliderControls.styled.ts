import styled from 'styled-components/macro'
import arrowImg from '@/assets/slider/arrow.svg'
import dotImg from '@/assets/slider/dot.svg'
import RowBase from '@/modules/health/styled-components/Row'

export const Wrapper = styled(RowBase)`
  max-width: 220px;
  flex-grow: 1;
  margin: 47px auto 0;
`

export const Row = RowBase

type ArrowProps = {
  $disabled?: boolean
}

export const BackArrow = styled.button<ArrowProps>`
  background-image: url('${arrowImg}');
  border: 0;
  background-color: transparent;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  width: 28px;
  height: 18px;

  opacity: ${(props) => (props.$disabled ? '0.4' : '1')};
`
export const ForwardArrow = styled(BackArrow)`
  transform: rotate(180deg);
`

type SlideIndicatorProps = {
  $current?: boolean
}

export const SlideIndicator = styled.button<SlideIndicatorProps>`
  width: 10px;
  height: 10px;
  background-image: url('${dotImg}');
  border: 0;
  background-color: transparent;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;

  opacity: ${(props) => (props.$current ? '1' : '0.3')};

  &:not(:first-of-type) {
    margin-left: 18px;
  }
`
