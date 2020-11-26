import React from 'react';
import { connect } from 'react-redux';
import { RouteProps } from 'react-router';
import { getMovie } from '../../store/movies/movies.action';
import { currentMovie } from '../../store/movies/movies.selector';
import { RootState } from '../../store/root-reducer.reducer';
import textStyles from '../../styles/text.module.scss';
import styles from './Movies.module.scss';

export interface MovieProps {
    getMovie: any;
    currentMovie: any;
}
class Movie extends React.Component<RouteProps> {
    componentWillMount() {
        const { id } = this.props.match.params;
        this.props.getMovie(id);
    }
    render() {
        return (
            <div className={styles.movie__container}
                style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${this.props.currentMovie?.images.backdrops[0].file_path})` }}>
                <div className={styles.movie__info}>
                    <div className={textStyles.title}>{this.props.currentMovie?.original_title}</div>
                    <div>{this.props.currentMovie?.tagline}</div>
                    <div className="">{this.props.currentMovie?.overview}</div>
                    <div>{this.props.currentMovie?.released_date}</div>
                    <div>{this.props.currentMovie?.credits.crew[0].name}</div>
                    <div>{this.props.currentMovie?.released_date}</div>
                </div>
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
