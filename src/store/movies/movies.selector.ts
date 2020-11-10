import { createSelector } from 'reselect';
import { RootState } from '../root-reducer.reducer';
import { MoviesState } from './movies.state';

// get all posts
export const movies = (state: RootState): MoviesState => state.movies;

// get new posts
export const upcomingMovies = createSelector<
    RootState,
    MoviesState,
    any[]>(
        movies,
        (movies) => movies.upcomingMovies,
    );