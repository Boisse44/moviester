import { GET_MOVIE, GET_MOVIE_COMPLETED, LOAD_UPCOMING_MOVIES, LOAD_UPCOMING_MOVIES_COMPLETED, MoviesActionTypes } from './movies.action'
import { MoviesState } from './movies.state'

const initialState: MoviesState = {
    upcomingMovies: [],
    currentMovie: null,
}

export function moviesReducer(
    state = initialState,
    action: MoviesActionTypes
): MoviesState {
    switch (action.type) {
        case LOAD_UPCOMING_MOVIES:
            return {
                ...state,
                upcomingMovies: []
            }
        case LOAD_UPCOMING_MOVIES_COMPLETED:
            return {
                ...state,
                upcomingMovies: action.payload.movies
            }
        case GET_MOVIE:
            return {
                ...state,
                currentMovie: null
            }
        case GET_MOVIE_COMPLETED:
            return {
                ...state,
                currentMovie: action.payload.movie
            }
        default:
            return state
    }
}