import { combineReducers } from 'redux';
import { moviesReducer } from './movies/movies.reducer';
import { searchReducer } from './search/search.reducer';

const rootReducer = combineReducers({
    movies: moviesReducer,
    search: searchReducer,
})

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer;