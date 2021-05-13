import React, { FC, useEffect, useState } from 'react';
import { connect, ConnectedProps } from "react-redux";
import { RouteComponentProps } from 'react-router-dom';
import { getMovie } from '../../store/movies/movies.action';
import { currentMovie } from '../../store/movies/movies.selector';
import { RootState } from '../../store/root-reducer.reducer';
import textStyles from '../../styles/text.module.scss';
import Modal from '../modal/Modal.component';
import styles from './Movies.module.scss';

export interface MovieState {
    showModal: boolean;
}

export type MovieProps = ReduxProps & RouteComponentProps<{id: string}>;

export const Movie: FC<MovieProps> = ({currentMovie, getMovie, match}) => {
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        getMovie(match.params.id);
    }, [match.params.id, getMovie]);
    return (
        <div className={styles.movie__container}
            style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${currentMovie?.images.backdrops[0].file_path})` }}>
            <div className={styles.movie__info}>
                <div className={textStyles.title}>{currentMovie?.original_title}</div>
                <div onClick={ () => { setShowModal(true);}}>Watch Trailer</div>
                <div>{currentMovie?.tagline}</div>
                <div className="">{currentMovie?.overview}</div>
                <div>{currentMovie?.runtime}</div>
                <div>{currentMovie?.credits.crew[0].name}</div>
                <div>{currentMovie?.release_date}</div>
                {currentMovie?.genres.map(genre => <div>{genre.name}</div>)}
                <div>{currentMovie?.vote_average}</div>
            </div>
            <div className={styles.cast}>
                <div>Cast</div>
                <div className={styles.cast__list}>
                    {currentMovie?.credits.cast
                        .filter(credit => credit.profile_path !== null)
                        .slice(0, 6)
                        .map(credit =>
                            <div>
                                <img className={styles.cast__image} alt="cast__image" src={`https://image.tmdb.org/t/p/original${credit.profile_path}`}></img>
                                <div>{credit.name}</div>
                            </div>)
                    }
                </div>
            </div>
            <div></div>
            <Modal show={showModal} handleClose={() => setShowModal(false)}>
                {/* 
  // @ts-ignore */}
                <iframe title='movie-trailer' src={`https://www.youtube.com/embed/${currentMovie?.videos.results[0].key}`} frameBorder="0" webkitallowfullscreen="" mozallowfullscreen allowfullscreen></iframe>
            </Modal>
        </div>
    )
}
const mapStateToProps = (state: RootState) => ({
    currentMovie: currentMovie(state),
});
const mapDispatchToProps = {
    getMovie:  getMovie,
}

const connector = connect(mapStateToProps, mapDispatchToProps);
type ReduxProps = ConnectedProps<typeof connector>;

export default connector(Movie);
