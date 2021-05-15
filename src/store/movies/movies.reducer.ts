import { GET_MOVIE, GET_MOVIE_COMPLETED, LOAD_TRENDING_MOVIES, LOAD_TRENDING_MOVIES_COMPLETED, LOAD_UPCOMING_MOVIES, LOAD_UPCOMING_MOVIES_COMPLETED, MoviesActionTypes } from './movies.action'
import { MoviesState } from './movies.state'

const initialState: MoviesState = {
    upcomingMovies: [],
    trendingMovies: [],
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
                upcomingMovies: action.payload.movies.filter(movie => Date.parse(movie.release_date) > Date.parse(new Date().toISOString().slice(0, 10)))
            }
        case LOAD_TRENDING_MOVIES:
            return {
                ...state,
                trendingMovies: [],
            }
        case LOAD_TRENDING_MOVIES_COMPLETED:
            return {
                ...state,
                trendingMovies: action.payload.movies
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