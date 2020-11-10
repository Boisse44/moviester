export const LOAD_UPCOMING_MOVIES = 'LOAD_UPCOMING_MOVIES'
export const LOAD_UPCOMING_MOVIES_COMPLETED = 'LOAD_UPCOMING_MOVIES_COMPLETED'

interface LoadUpcomingMoviesAction {
    type: typeof LOAD_UPCOMING_MOVIES
}

interface LoadUpcomingMoviesCompletedAction {
    type: typeof LOAD_UPCOMING_MOVIES_COMPLETED
    payload: {
        movies: any[]
    }
}

export function loadUpcomingMovies(): MoviesActionTypes {
    return {
        type: LOAD_UPCOMING_MOVIES,
    }
}

export function loadUpcomingMoviesCompleted(movies: any[]): MoviesActionTypes {
    return {
        type: LOAD_UPCOMING_MOVIES_COMPLETED,
        payload: {
            movies
        }
    }
}

export type MoviesActionTypes = LoadUpcomingMoviesAction | LoadUpcomingMoviesCompletedAction