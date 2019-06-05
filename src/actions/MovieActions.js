import { GET_UPCOMING_MOVIES, SEARCH_MOVIE, GET_MOVIE_BY_ID, 
    SET_CURRENT_PAGE, SET_SEARCH_TITLE } from './ActionTypes'
import axios from 'axios';

const baseURl = 'http://localhost:5000/api/v1';
const upcomingMoviesUrl = baseURl + '/movie/upcoming';
const movieUrl = baseURl + '/movie';

export const getUpcomingMovies = (language = 'en-US', page = 1) => {
    return (dispatch) => {
        return axios.get(`${upcomingMoviesUrl}?language=${language}&page=${page}`)
            .then(response => {
                dispatch(getIncomingMoviesSuccess(response.data));
                dispatch(setCurrentPageSuccess(page));
            })
            .catch(() => {
            });
    };
};

export const setCurrentPageSuccess = (page) => {
    return {
        type: SET_CURRENT_PAGE,
        payload: page
    }
}

export const setSearchTitleSuccess = (title) => {
    return {
        type: SET_SEARCH_TITLE,
        payload: title
    }
}

export const getIncomingMoviesSuccess = (data) => {
    return {
        type: GET_UPCOMING_MOVIES,
        payload: data
    }
};

export const searchByMovieTitle = (title, language = 'en-US', page = 1) => {
    return (dispatch) => {
        if(title.length > 0) {
            return axios.get(`${movieUrl}?language=${language}&title=${title}&page=${page}`)
                .then(response => {
                    dispatch(setSearchTitleSuccess(title))
                    dispatch(searchByMovieTitleSuccess(response.data))
                    dispatch(setCurrentPageSuccess(page))
                })
                .catch(() => {
                });
            } else if(title.length === 0) {
                dispatch(getUpcomingMovies())
            }
    };
}

export const searchByMovieTitleSuccess = (data) => {
    return {
        type: SEARCH_MOVIE,
        payload: data
    }
}

export const getMovieById = (id, language = 'en-US') => {
    return (dispatch) => {
        return axios.get(`${movieUrl}/${id}?language=${language}`)
        .then(response => {
            dispatch(getMovieByIdSuccess(response.data));
        })
        .catch(() => {
        });
    }
}

export const getMovieByIdSuccess = (data) => {
    return {
        type: GET_MOVIE_BY_ID,
        payload: data
    }
}