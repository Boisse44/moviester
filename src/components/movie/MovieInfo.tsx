import classNames from 'classnames';
import React, { FC } from 'react';
import textStyles from '../../styles/text.module.scss';
import Score from '../score/Score.component';
import styles from './Movies.module.scss';

export interface MovieInfoProps {
    currentMovie: any;
}

export const MovieInfo: FC<MovieInfoProps> = ({currentMovie}) => {
    return (
            <div className={styles.movie__info}>
                <div>
                    <div className={textStyles.title}>{currentMovie?.title}</div>
                    <div className={classNames({ [styles.tagline]: true, [textStyles.tagline]: true})}>{currentMovie?.tagline}</div>
                </div>
                <div className={styles.overview}>{currentMovie?.overview}</div>
                <div className={styles.runtime}>
                    <div className={styles.runtime__info}>{currentMovie?.runtime} minutes</div>
                    <div>{currentMovie?.director}</div>
                </div>
                <div className={styles.release_date}> 
                    <div>{currentMovie?.release_year}</div>
                    {currentMovie?.genres.map(genre => <div>{genre.name}</div>)}
                </div>
                <Score score={currentMovie?.vote_average} />
            </div>
    )
}

export default MovieInfo;
