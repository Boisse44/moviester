import { SEARCH, SearchActionTypes, SEARCH_COMPLETED } from './search.action'
import { SearchState } from './search.state'

const initialState: SearchState = {
    results: []
}

export function searchReducer(
    state = initialState,
    action: SearchActionTypes
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
        default:
            return state
    }
}