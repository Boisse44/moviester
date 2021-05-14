import { call, debounce, put } from 'redux-saga/effects';
import { searchMulti } from '../services/tmdb-api.service.';
import { SEARCH, searchCompleted } from '../store/search/search.action';

function* search(action) {
    try {
        let results = [];
        if (!!action.payload.keyword) {
            const response = yield call(searchMulti, action.payload.keyword);
            results = response.data.results;
        }
        yield put(searchCompleted(results));
    } catch (e) {
        console.log('error');
    }
}

function* searchSaga() {
    yield debounce(1000, SEARCH, search);
}

export default searchSaga;