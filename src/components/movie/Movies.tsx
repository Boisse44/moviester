import React from 'react';
import { connect } from "react-redux";
import { RouteProps } from 'react-router';
import { getMovie } from '../../store/movies/movies.action';
import { currentMovie } from '../../store/movies/movies.selector';
import { RootState } from '../../store/root-reducer.reducer';
import textStyles from '../../styles/text.module.scss';
import Modal from '../modal/Modal.component';
import styles from './Movies.module.scss';

export interface MovieProps {
    getMovie: any;
    currentMovie: any;
}
export type Props = RouteProps & MovieProps;
export interface MovieState {
    showModal: boolean;
}
class Movie extends React.Component<Props, MovieState> {
    constructor(props) {
        super(props)

        this.state = {
            showModal: false,
        }
    }

    componentWillMount() {
        const { id } = this.props.match.params;
        this.props.getMovie(id);
    }
    showModal = e => {
        this.setState({
            showModal: !this.state.showModal
        });
    };
    handleClose = () => {
        this.setState({
            showModal: false,
        })
    }
    render() {
        return (
            <div className={styles.movie__container}
                style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${this.props.currentMovie?.images.backdrops[0].file_path})` }}>
                <div className={styles.movie__info}>
                    <div className={textStyles.title}>{this.props.currentMovie?.original_title}</div>
                    <div onClick={e => {
                        this.showModal(e);
                    }}>Watch Trailer</div>
                    <div>{this.props.currentMovie?.tagline}</div>
                    <div className="">{this.props.currentMovie?.overview}</div>
                    <div>{this.props.currentMovie?.runtime}</div>
                    <div>{this.props.currentMovie?.credits.crew[0].name}</div>
                    <div>{this.props.currentMovie?.release_date}</div>
                    {this.props.currentMovie?.genres.map(genre => <div>{genre.name}</div>)}
                    <div>{this.props.currentMovie?.vote_average}</div>
                </div>
                <div className={styles.cast}>
                    <div>Cast</div>
                    <div className={styles.cast__list}>
                        {this.props.currentMovie?.credits.cast
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
                <Modal show={this.state.showModal} handleClose={this.handleClose}>
                    <iframe width="420" height="315" src={`https://www.youtube.com/embed/${this.props.currentMovie?.videos.results[0].key}`}>
                    </iframe>
                </Modal>
            </div>
        )
    }
}

const mapStateToProps = (state: RootState) => ({
    currentMovie: currentMovie(state),
});
const mapDispatchToProps = {
    getMovie: (id) => getMovie(id),
}

export default connect(mapStateToProps, mapDispatchToProps)(Movie);
