export const SEARCH = 'SEARCH'
export const SEARCH_COMPLETED = 'SEARCH_COMPLETED'

interface SearchAction {
    type: typeof SEARCH,
    payload: {
        keyword: string
    }
}

interface SearchCompletedAction {
    type: typeof SEARCH_COMPLETED
    payload: {
        results: any[]
    }
}

export function search(keyword: string): SearchActionTypes {
    return {
        type: SEARCH,
        payload: {
            keyword
        }
    }
}

export function searchCompleted(results: any[]): SearchActionTypes {
    return {
        type: SEARCH_COMPLETED,
        payload: {
            results
        }
    }
}

export type SearchActionTypes = SearchAction | SearchCompletedAction