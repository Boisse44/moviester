import { createSelector } from 'reselect';
import { RootState } from '../root-reducer.reducer';
import { CurrentMovie } from './model/current-movie';
import { TrendingMovie } from './model/trending-movie';
import { MoviesState } from './movies.state';

export const movies = (state: RootState): MoviesState => state.movies;

export const upcomingMovies = createSelector<
    RootState,
    MoviesState,
    any[]>(
        movies,
        (movies) => movies.upcomingMovies,
    );


export const trendingMovies = createSelector<
    RootState,
    MoviesState,
    TrendingMovie[]>(
        movies,
        (movies) => movies.trendingMovies,
    );

export const currentMovie = createSelector<
    RootState,
    MoviesState,
    any>(
        movies,
        (movies) : CurrentMovie | null => movies.currentMovie,
    );