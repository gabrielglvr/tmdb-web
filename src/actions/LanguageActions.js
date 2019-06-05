import { SET_LANGUAGE } from './ActionTypes'

export const setLanguage = (name) => {
    return (dispatch) => {
        dispatch(setLanguageSuccess(name))
    };
};

export const setLanguageSuccess = (name) => {
    return {
        type: SET_LANGUAGE,
        payload: name
    }
}