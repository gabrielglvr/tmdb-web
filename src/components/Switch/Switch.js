import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Switch extends Component {

    static propTypes = {
        langHandler: PropTypes.func.isRequired,
        language: PropTypes.string.isRequired
    }

    handleChange = e => {
        this.props.langHandler(e.target.value)
    }

    render() {
        return (
            <select className="form-control-sm" onChange={this.handleChange} value={this.props.language}>
                <option value="en-US">en-US</option>
                <option value="pt-BR">pt-BR</option>
            </select>
        )
    }
}