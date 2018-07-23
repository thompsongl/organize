import styled from 'styled-components'
import {
  space,
  width,
  maxWidth,
  flex,
  color,
  boxShadow
} from 'styled-system'

const Box = styled.div`
  ${space}
  ${width}
  ${maxWidth}
  ${flex}
  ${color}
  ${boxShadow}
`

Box.propTypes = {
  ...space.propTypes,
  ...width.propTypes,
  ...maxWidth.propTypes,
  ...flex.propTypes,
  ...color.propTypes,
  ...boxShadow.propTypes
}

export default Box
