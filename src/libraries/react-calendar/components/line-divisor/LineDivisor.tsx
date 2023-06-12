import { LineDivisor as LineDivisorStyled } from './LineDivisor.styled'

function LineDivisor() {
  return (
    <div style={{ borderTop: '1px solid #dadce0' }}>
      {Array.from(Array(24).keys()).map((_: any, ix: number) => (
        <LineDivisorStyled
          key={`time-line-divisor-${ix}`}
          data-group="time-line"
        />
      ))}
    </div>
  )
}

export default LineDivisor
