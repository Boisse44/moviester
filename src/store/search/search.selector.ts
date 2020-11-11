import { createSelector } from 'reselect';
import { RootState } from '../root-reducer.reducer';
import { SearchState } from './search.state';

// get all posts
export const search = (state: RootState): SearchState => state.search;

// get new posts
export const searchResults = createSelector<
    RootState,
    SearchState,
    any[]>(
        search,
        (search) => search.results,
    );