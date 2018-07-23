import React from 'react'
import Box from './Box'
import theme from './theme'

class Expandable extends React.PureComponent {
    state = {
        isOpen: false
    }
    toggleOpen = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
    render() {
        return (
            <Box>
                <button onClick={this.toggleOpen}>{this.props.title}</button>
                {/* TODO: Accessibility */}
                {this.state.isOpen && <Box>{this.props.children}</Box>}
            </Box>
        )
    }
}

export default Expandable
