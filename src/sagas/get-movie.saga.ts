import { call, put, takeEvery } from 'redux-saga/effects';
import { getMovie } from '../services/tmdb-api.service.';
import { getMovieCompleted, GET_MOVIE } from '../store/movies/movies.action';

function* fetchMovie(action) {
    try {
        const movie = yield call(getMovie, action.id);
        yield put(getMovieCompleted(movie.data));
    } catch (e) {
        console.log('error');
    }
}

function* getMovieSaga() {
    yield takeEvery(GET_MOVIE, fetchMovie);
}

export default getMovieSaga;