import React, { FC } from 'react';
import textStyles from '../../styles/text.module.scss';
import styles from './Movies.module.scss';

export interface MovieInfoProps {
    currentMovie: any;
}

export const MovieInfo: FC<MovieInfoProps> = ({currentMovie}) => {
    return (
            <div className={styles.movie__info}>
                <div className={textStyles.title}>{currentMovie?.original_title}</div>
                <div>{currentMovie?.tagline}</div>
                <div className="">{currentMovie?.overview}</div>
                <div>{currentMovie?.runtime}</div>
                <div>{currentMovie?.credits.crew[0].name}</div>
                <div>{currentMovie?.release_date}</div>
                {currentMovie?.genres.map(genre => <div>{genre.name}</div>)}
                <div>{currentMovie?.vote_average}</div>
            </div>
    )
}

export default MovieInfo;
