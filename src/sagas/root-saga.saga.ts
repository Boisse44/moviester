import { all, call } from 'redux-saga/effects';
import getMovieSaga from './get-movie.saga';
import loadTrendingMoviesSaga from './load-trending-movies.saga';
import loadUpcomingMoviesSaga from './load-upcoming-movies.saga';
import searchSaga from './search.saga';

const sagas = [loadUpcomingMoviesSaga, loadTrendingMoviesSaga, searchSaga, getMovieSaga];

function* rootSaga() {
    yield all(sagas.map(saga => call(saga)));
}

export default rootSaga;