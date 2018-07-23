import Box from './Box'
import theme from './theme'

const Card = Box.withComponent('div')

Card.defaultProps = {
    px: 2,
    py: 4,
    boxShadow: 1,
    textAlign: 'center',
    w: '250px',
    bg: 'white'
}

export default Card
