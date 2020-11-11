import { all, call } from 'redux-saga/effects';
import loadUpcomingMoviesSaga from './load-upcoming-movies.saga';
import searchSaga from './search.saga';

const sagas = [loadUpcomingMoviesSaga, searchSaga];

function* rootSaga() {
    yield all(sagas.map(saga => call(saga)));
}

export default rootSaga;