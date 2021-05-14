import { GET_MOVIE, LOAD_TRENDING_MOVIES, MoviesActionTypes } from '../movies/movies.action'
import { SEARCH, SearchActionTypes, SEARCH_COMPLETED } from './search.action'
import { SearchState } from './search.state'

const initialState: SearchState = {
    results: [],
    isLoading: false,
}

export function searchReducer(
    state = initialState,
    action: SearchActionTypes | MoviesActionTypes
): SearchState {
    switch (action.type) {
        case SEARCH:
            return {
                ...state,
                isLoading: true,
                results: []
            }
        case SEARCH_COMPLETED:
            return {
                ...state,
                isLoading: false,
                results: action.payload.results.filter(result => !!result.poster_path)
            }
        case GET_MOVIE:
        case LOAD_TRENDING_MOVIES:
            return {
                ...state,
                isLoading: false,
                results: []
            }
        default:
            return state
    }
}