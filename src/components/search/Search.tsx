import classNames from 'classnames';
import React, { FC } from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../store/root-reducer.reducer';
import { search } from '../../store/search/search.action';
import { isSearchLoading, searchResults } from '../../store/search/search.selector';
import Loading from '../loading/Loading.component';
import styles from './Search.module.scss';
import SearchResult from './SearchResult';

interface SearchProps {
    searchResults: any;
    searchQuery: any,
    isLoading: boolean,
}

const Search: FC<SearchProps> = ({searchResults, searchQuery, isLoading}) => {
    return (
        <div>
            <input className={styles.input} onChange={(event) => searchQuery(event.target.value)}></input>
            <div className={classNames({ [styles.search__results]: true, [styles.show]: searchResults.length > 0 || isLoading, })}>
                { isLoading && <Loading /> }
                {searchResults.map((result, i) => {
                    return (<SearchResult index={i} key={i} searchResult={result} />)
                })}
            </div>
        </div>
    ) 
}


const mapStateToProps = (state: RootState) => ({
    searchResults: searchResults(state),
    isLoading: isSearchLoading(state),
});
const mapDispatchToProps = {
    searchQuery: (keyword) => search(keyword)
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
