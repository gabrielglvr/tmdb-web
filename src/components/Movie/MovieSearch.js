import React, { Component } from 'react'
import PropTypes from 'prop-types'
import i18n from "../../i18n";

export default class MovieSearch extends Component {

    static propTypes = {
        searchByMovieTitle: PropTypes.func.isRequired
    }

    state = {
        query: ''
    }

    searchTitle = (e) => {
        let query = e.target.value
        this.setState({query})
        this.props.searchByMovieTitle(query)
    }

    render() {
        const {
            language
        } = this.props

        return (
            <div className="row pt-5">
                <div className="col">
                    <div className="search-bar">
                        <input className="form-control" type="text" onChange={this.searchTitle} placeholder={i18n.t('My favourite movie', { lng: language })} value={this.state.query} />
                    </div>
                </div>
            </div>
        )
    }
}