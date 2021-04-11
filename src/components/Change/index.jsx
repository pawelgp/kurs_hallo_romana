import React from 'react'

class Change extends React.Component {
    state = {
        text: 'state test',
    }

    handleChange = (event) => {
        this.setState({ text: event.target.value.toUpperCase() })
    }

    render() {
        return (<>
            <input
                placeholder="text"
                onChange={this.handleChange}
                value={this.state.text}
            />
            <p>{this.state.text}</p>
        </>)
    }
}

export default Change