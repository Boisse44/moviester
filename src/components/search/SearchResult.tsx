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
            <div>
                <img className={styles.result__image} alt="upcoming__image" src={`https://image.tmdb.org/t/p/original${searchResult.poster_path}`}></img>
            </div>
            <div className={styles.result__details}>
                <span className={styles.result__title}>{searchResult.original_title}</span>
                <span>{searchResult.release_date.split('-')[0]}</span>
            </div>
        </div>
    )

}

export default withRouter(SearchResult);