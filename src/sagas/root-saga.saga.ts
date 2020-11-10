import { all, call } from 'redux-saga/effects';
import loadUpcomingMoviesSaga from './load-upcoming-movies.saga';

const sagas = [loadUpcomingMoviesSaga];

function* rootSaga() {
    yield all(sagas.map(saga => call(saga)));
}

export default rootSaga;