import React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../store/root-reducer.reducer';
import { search } from '../../store/search/search.action';
import { searchResults } from '../../store/search/search.selector';

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
                    return (<div key={i}>{result.original_name}</div>)
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
