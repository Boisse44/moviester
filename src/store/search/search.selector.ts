import { createSelector } from 'reselect';
import { RootState } from '../root-reducer.reducer';
import { SearchState } from './search.state';

export const search = (state: RootState): SearchState => state.search;

export const searchResults = createSelector<
    RootState,
    SearchState,
    any[]>(
        search,
        (search) => search.results,
    );

export const isSearchLoading = createSelector<
    RootState,
    SearchState,
    boolean>(
        search,
        (search) => search.isLoading,
    );