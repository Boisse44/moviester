import React, { FC } from 'react';
import styles from './Movies.module.scss';

export interface MovieCastProps {
    currentMovie: any;
}

export const MovieCast: FC<MovieCastProps> = ({currentMovie}) => {
    return (
        <div className={styles.cast}>
        <div>Cast</div>
        <div className={styles.cast__list}>
            {currentMovie?.credits.cast
                .filter(credit => credit.profile_path !== null)
                .slice(0, 6)
                .map(credit =>
                    <div className={styles.cast__item}>
                        <img className={styles.cast__image} alt="cast__image" src={`https://image.tmdb.org/t/p/original${credit.profile_path}`}></img>
                        <div>{credit.name}</div>
                    </div>)
            }
        </div>
    </div>
    )
}

export default MovieCast;
