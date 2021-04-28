import React, { FC } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import styles from './SearchResult.module.scss';

export interface SearchResultProps extends RouteComponentProps {
    index: number;
    searchResult: any;
}

export const SearchResult: FC<SearchResultProps> = ({index, searchResult, history}) => {
    const routeChange = (movie: any) => {
        history.push(`/movie/${movie.id}`);
    }
    return (
        <div key={index} className={styles.result__container} onClick={() => routeChange(searchResult)}>
            <span>
                <img className={styles.result__image} alt="upcoming__image" src={`https://image.tmdb.org/t/p/original${searchResult.poster_path}`}></img>
            </span>
            <span>{searchResult.original_title}</span>
        </div>
    )

}

export default withRouter(SearchResult);