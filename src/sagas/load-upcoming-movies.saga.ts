import { call, put, takeEvery } from 'redux-saga/effects';
import { getUpcomingMovies } from '../services/movies.service';
import { loadUpcomingMoviesCompleted, LOAD_UPCOMING_MOVIES } from '../store/movies/movies.action';

function* fetchUpcomingMovies(action) {
    try {
        const movies = yield call(getUpcomingMovies);
        yield put(loadUpcomingMoviesCompleted(movies.data.results));
    } catch (e) {
        console.log('error');
    }
}

function* loadUpcomingMoviesSaga() {
    yield takeEvery(LOAD_UPCOMING_MOVIES, fetchUpcomingMovies);
}

export default loadUpcomingMoviesSaga;