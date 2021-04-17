import classNames from 'classnames';
import React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../store/root-reducer.reducer';
import { search } from '../../store/search/search.action';
import { searchResults } from '../../store/search/search.selector';
import styles from './Search.module.scss';
import SearchResult from './SearchResult';


interface MainProps {
    searchResults: any;
    searchQuery: any,
}

class Search extends React.Component<MainProps> {
    render() {
        return (
            <div>
                <input className={styles.input} onChange={(event) => this.props.searchQuery(event.target.value)}></input>
                <div className={classNames({ [styles.search__results]: true, [styles.show]: this.props.searchResults.length > 0, })}>
                    {this.props.searchResults.map((result, i) => {
                        return (<SearchResult index={i} searchResult={result} />)
                    })}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state: RootState) => ({
    searchResults: searchResults(state),
});
const mapDispatchToProps = {
    searchQuery: (keyword) => search(keyword)
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
