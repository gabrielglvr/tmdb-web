import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { getMovieById } from '../../actions'
import { Link } from 'react-router-dom'
import i18n from "../../i18n";
import moment from 'moment'
import 'moment/locale/pt-br';

class MovieDetailsContainer extends Component {

    componentDidMount() {
        let id = this.props.match.params.id
        let language = this.props.language
        this.props.getMovieById(id, language)
    }

    render() {
        const {
            movieDetails,
            language
        } = this.props

        return (
            <div className="details bg">
                {movieDetails.id ?
                    <>
                        <img className="backdrop-img d-none d-md-block" src={"https://image.tmdb.org/t/p/w600_and_h900_bestv2/" + movieDetails.backdrop_path} alt="movie background" />
                        <div className="container">
                            <div className="row">
                                <div className="col-md-4">
                                    <img className="poster d-none d-md-block" src={"https://image.tmdb.org/t/p/w300_and_h450_bestv2/" + movieDetails.poster_path} alt="movie poster" />
                                </div>
                                <div className="col-md-8 details-info">
                                    <h2>{movieDetails.title} ({moment(movieDetails.release_date).locale(language).format('LL')})</h2>
                                    <ul className="genres">
                                        {movieDetails.genres ?
                                            movieDetails.genres.map((value, index) => {
                                                return (
                                                    <li key={index}>{value.name}</li>
                                                )
                                            }) :
                                            (
                                                <></>
                                            )}
                                    </ul>
                                    <section className="overview">
                                        <span className="title">Overview</span>
                                        <span className="text">{movieDetails.overview}</span>
                                    </section>

                                    <div className="actions">
                                        <Link to={`/?language=${language}`}>
                                            <button className="btn btn-sm btn-info">
                                                {i18n.t('Back', { lng: language })}
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </> :
                    <></>
                }

            </div>
        )
    }
}

const mapStateToProps = store => (
    {
        movieDetails: store.movieState.movieDetails,
        language: store.languageState.language
    }
);

const mapDispatchToProps = dispatch => bindActionCreators({ getMovieById }, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MovieDetailsContainer));