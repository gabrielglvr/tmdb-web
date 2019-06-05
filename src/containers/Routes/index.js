import MovieContainer from '../Movie/MovieContainer'
import MovieDetailsContainer from '../Movie/MovieDetailsContainer'

export default [
    {
        component: MovieContainer,
        path: '/',
    },
    {
        component: MovieDetailsContainer,
        path: '/:id'
    }
];