import React from 'react';
import { withRouter } from 'react-router-dom';
import styles from './SearchResult.module.scss';



export interface SearchResultProps {
    index: number;
    searchResult: any;
    history: any;
}

class SearchResult extends React.Component<SearchResultProps> {
    routeChange = (movie: any) => {
        this.props.history.push(`/movie/${movie.id}`);
    }
    render() {
        return (
            <div key={this.props.index} onClick={() => this.routeChange(this.props.searchResult)}>
                <span>
                    <img className={styles.result__image} alt="upcoming__image" src={`https://image.tmdb.org/t/p/original${this.props.searchResult.poster_path}`}></img>
                </span>
                <span>{this.props.searchResult.original_title}</span>
            </div>
        )
    }
}

export default withRouter(SearchResult);