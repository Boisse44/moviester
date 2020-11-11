import { call, put, takeEvery } from 'redux-saga/effects';
import { searchMulti } from '../services/tmdb-api.service.';
import { SEARCH, searchCompleted } from '../store/search/search.action';

function* search(action) {
    try {
        const results = yield call(searchMulti, action.payload.keyword);
        yield put(searchCompleted(results.data.results));
    } catch (e) {
        console.log('error');
    }
}

function* searchSaga() {
    yield takeEvery(SEARCH, search);
}

export default searchSaga;