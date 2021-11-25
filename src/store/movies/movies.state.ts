import { CurrentMovie } from './model/current-movie';
import { TrendingMovie } from './model/trending-movie';

export interface MoviesState {
    upcomingMovies: any[];
    trendingMovies: TrendingMovie[];
    currentMovie: CurrentMovie | null;
}