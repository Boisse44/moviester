import React, { FC, useEffect, useState } from 'react';
import { connect, ConnectedProps } from "react-redux";
import { RouteComponentProps } from 'react-router-dom';
import { ReactComponent as PlayButton } from '../../images/play-button.svg';
import { getMovie } from '../../store/movies/movies.action';
import { currentMovie } from '../../store/movies/movies.selector';
import { RootState } from '../../store/root-reducer.reducer';
import Modal from '../modal/Modal.component';
import MovieCast from './MovieCast';
import MovieInfo from './MovieInfo';
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
        <div className={styles.movie__container} style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${currentMovie?.images.backdrops[0].file_path})` }}>
            <MovieInfo currentMovie={currentMovie}/>
            <MovieCast currentMovie={currentMovie}/>
            <button className={styles.play} onClick={() => setShowModal(true)}><PlayButton></PlayButton></button>
            <Modal show={showModal} handleClose={() => setShowModal(false)}>
                {/* 
                    // @ts-ignore 
                */}
                <iframe title='movie-trailer' src={`https://www.youtube.com/embed/${currentMovie?.videos.results[0].key}`} frameBorder="0"></iframe>
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
