
import { SET_LANGUAGE } from '../actions/ActionTypes'

const initialState = {
    language: 'en-US'
}

export const LanguageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LANGUAGE:
            return {
                ...state,
                language: action.payload
            }
        default:
            return state;
    }
}