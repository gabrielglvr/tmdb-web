import { combineReducers } from 'redux'
import { MovieReducer} from './MovieReducer'
import { LanguageReducer } from './LanguageReducer'

export default combineReducers({
    movieState: MovieReducer,
    languageState: LanguageReducer
});