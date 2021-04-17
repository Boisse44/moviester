import { GET_MOVIE, LOAD_TRENDING_MOVIES, MoviesActionTypes } from '../movies/movies.action'
import { SEARCH, SearchActionTypes, SEARCH_COMPLETED } from './search.action'
import { SearchState } from './search.state'

const initialState: SearchState = {
    results: []
}

export function searchReducer(
    state = initialState,
    action: SearchActionTypes | MoviesActionTypes
): SearchState {
    switch (action.type) {
        case SEARCH:
            return {
                results: []
            }
        case SEARCH_COMPLETED:
            return {
                results: action.payload.results
            }
        case GET_MOVIE:
        case LOAD_TRENDING_MOVIES:
            return {
                results: []
            }
        default:
            return state
    }
}