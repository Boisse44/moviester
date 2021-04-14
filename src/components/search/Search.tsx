import React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../store/root-reducer.reducer';
import { search } from '../../store/search/search.action';
import { searchResults } from '../../store/search/search.selector';
import SearchResult from './SearchResult';

interface MainProps {
    searchResults: any;
    searchQuery: any,
}

class Search extends React.Component<MainProps> {
    render() {
        return (
            <div>
                <input onChange={(event) => this.props.searchQuery(event.target.value)}></input>
                {this.props.searchResults.map((result, i) => {
                    return (<SearchResult index={i} searchResult={result} />)
                })}
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
