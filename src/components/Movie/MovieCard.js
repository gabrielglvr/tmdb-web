import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import fire_logo from '../../resources/tinder-seeklogo.com.svg';
import moment from 'moment'
import 'moment/locale/pt-br';
import i18n from "../../i18n";

export default class MovieCard extends Component {
    
    render() {
        const {
            movie,
            language
        } = this.props

        return (
            <div className="custom-card">
                <div className="image-content">
                    <img src={"https://image.tmdb.org/t/p/w300_and_h450_bestv2" + movie.poster_path} alt="movie poster"></img>
                </div>
                <div className="info">
                    <div className="info-header">
                        <div className="row">
                            <div className="col-12">
                                <Link to={'/' + movie.id}>
                                    <img src={fire_logo} className="fire-logo" alt="fire logo" />
                                    <span className="vote-average">{movie.vote_average}</span>
                                    <span className="movie-name">{movie.title}</span>
                                </Link>
                            </div>
                        </div>
                        <div className="row">
                            <span className="col-12">{moment(movie.release_date).locale(language).format('LL')}</span>
                        </div>
                    </div>
                    <p className="overview">
                        {movie.overview}
                    </p>
                    <div className="view-more">
                        <Link to={'/' + movie.id}>
                            {i18n.t('More Info', { lng: language })}
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}