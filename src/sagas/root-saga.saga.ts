import { all, call } from 'redux-saga/effects';
import getMovieSaga from './get-movie.saga';
import loadUpcomingMoviesSaga from './load-upcoming-movies.saga';
import searchSaga from './search.saga';

const sagas = [loadUpcomingMoviesSaga, searchSaga, getMovieSaga];

function* rootSaga() {
    yield all(sagas.map(saga => call(saga)));
}

export default rootSaga;