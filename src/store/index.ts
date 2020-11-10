import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas/root-saga.saga';
import rootReducer from './root-reducer.reducer';

const initialState = {};
const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(rootReducer,
    initialState,
    composeEnhancers(
        applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga)

export default store;