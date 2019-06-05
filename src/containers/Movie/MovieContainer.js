import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { getUpcomingMovies, searchByMovieTitle, setLanguage } from '../../actions'
import MovieCard from '../../components/Movie/MovieCard'
import MovieSearch from '../../components/Movie/MovieSearch'
import Switch from '../../components/Switch/Switch'
import Pagination from "react-js-pagination";
import i18n from "../../i18n";

class MovieContainer extends Component {

    componentDidMount() {
        let languageParam = this.props.match.params.language
        let language = languageParam ? languageParam : this.props.language
        this.props.setLanguage(language)
        this.props.getUpcomingMovies(language)
    }

    handlePageChange = page => {
        let {
            searchQuery,
            language
        } = this.props

        if (searchQuery) {
            this.props.searchByMovieTitle(searchQuery, language, page)
        } else {
            this.props.getUpcomingMovies(language, page)
        }
    }

    handleLanguage = language => {
        this.props.setLanguage(language)
        
        let {
            searchQuery,
            page
        } = this.props

        if (searchQuery) {
            this.props.searchByMovieTitle(searchQuery, language, page)
        } else {
            this.props.getUpcomingMovies(language, page)
        }
    }

    handleSearch = query => {
        let {
            language
        } = this.props

        this.props.searchByMovieTitle(query, language, this.props.page)
    }

    render() {
        const {
            movieResult,
            page,
            language
        } = this.props

        return (
            <div className="container">
                <div className="row mt-2">
                    <div className="col d-flex flex-row-reverse">
                        <Switch language={language} langHandler={this.handleLanguage} />
                    </div>
                </div>
                <MovieSearch searchByMovieTitle={this.handleSearch} language={language} />
                <Pagination
                    itemClass="page-item"
                    linkClass="page-link"
                    activePage={page}
                    itemsCountPerPage={20}
                    totalItemsCount={movieResult.total_results}
                    pageRangeDisplayed={10}
                    onChange={this.handlePageChange} />

                <div className="row mt-4">
                    <div className="col">
                        <h2>
                            {i18n.t('Upcoming Movies', { lng: language })}
                        </h2>
                        <div className="results">
                            {movieResult.results.map((movie, index) => {
                                return (
                                    <MovieCard key={index} movie={movie} language={language} />
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = store => (
    {
        movieResult: store.movieState.movieResult,
        page: store.movieState.page,
        searchQuery: store.movieState.searchTitle,
        language: store.languageState.language
    }
);

const mapDispatchToProps = dispatch => bindActionCreators({ getUpcomingMovies, searchByMovieTitle, setLanguage }, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MovieContainer));