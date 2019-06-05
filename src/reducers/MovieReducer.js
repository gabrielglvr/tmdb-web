
import { GET_UPCOMING_MOVIES, SEARCH_MOVIE, GET_MOVIE_BY_ID, 
    SET_CURRENT_PAGE, SET_SEARCH_TITLE } from '../actions/ActionTypes'

const initialState = {
    movieResult: {
        page: 0,
        total_pages: 0,
        total_results: 0,
        results: [
        ]
    },
    searchTitle: '',
    page: 0,
    movieDetails: {}
}

export const MovieReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_UPCOMING_MOVIES:
            return {
                ...state,
                movieResult: action.payload
            }
        case SEARCH_MOVIE:
            return {
                ...state,
                movieResult: action.payload
            }
        case GET_MOVIE_BY_ID:
            return {
                ...state,
                movieDetails: action.payload
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                page: action.payload
            }
        case SET_SEARCH_TITLE:
            return {
                ...state,
                searchTitle: action.payload
            }
        default:
            return state;
    }
}