import { call, put, takeEvery } from 'redux-saga/effects';
import { getTrendingMovies } from '../services/tmdb-api.service.';
import { loadTrendingMoviesCompleted, LOAD_TRENDING_MOVIES } from '../store/movies/movies.action';

function* fetchTrendingMovies() {
    try {
        const movies = yield call(getTrendingMovies);
        yield put(loadTrendingMoviesCompleted(movies.data.results));
    } catch (e) {
        console.log('error');
    }
}

function* loadTrendingMoviesSaga() {
    yield takeEvery(LOAD_TRENDING_MOVIES, fetchTrendingMovies);
}

export default loadTrendingMoviesSaga;