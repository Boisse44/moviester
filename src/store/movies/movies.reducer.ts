import { LOAD_UPCOMING_MOVIES, LOAD_UPCOMING_MOVIES_COMPLETED, MoviesActionTypes } from './movies.action'
import { MoviesState } from './movies.state'

const initialState: MoviesState = {
    upcomingMovies: []
}

export function moviesReducer(
    state = initialState,
    action: MoviesActionTypes
): MoviesState {
    switch (action.type) {
        case LOAD_UPCOMING_MOVIES:
            return {
                upcomingMovies: []
            }
        case LOAD_UPCOMING_MOVIES_COMPLETED:
            return {
                upcomingMovies: action.payload.movies
            }
        default:
            return state
    }
}