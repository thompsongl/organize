import styled from 'styled-components'
import theme from './theme'
import { space, width, borderColor, propTypes } from 'styled-system'

const Divider = styled.hr`
    border: 0;
    border-bottom-style: solid;
    border-bottom-width: 1px;
    ${space}
    ${width}
    ${borderColor};
`

Divider.displayName = 'Divider'

Divider.defaultProps = {
    borderColor: 'green.2',
    theme: theme,
    ml: 0,
    mr: 0
}

Divider.propTypes = {
    ...propTypes.space,
    ...propTypes.width,
    ...propTypes.borderColor
}

export default Divider
