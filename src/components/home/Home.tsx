import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { loadUpcomingMovies } from '../../store/movies/movies.action';
import { upcomingMovies } from '../../store/movies/movies.selector';
import { RootState } from '../../store/root-reducer.reducer';
import Layout from '../layout/Layout';
import styles from './Home.module.scss';

export interface MainProps {
    upcomingMovies: any;
    loadUpcomingMovies: any,
    history: any
}

class Home extends React.Component<MainProps> {
    routeChange = (movie: any) => {
        this.props.history.push(`/movie/`);
    }
    componentWillMount() {
        this.props.loadUpcomingMovies();
    }
    render() {
        return (
            <div>
                <Layout>
                    <div className={styles.home__container}>
                        <div className={styles.upcoming__container}>
                            {this.props.upcomingMovies.map((movie, i) => {
                                return (
                                    <div key={i} className={styles.upcomingItem__container} onClick={() => this.routeChange(movie)}>
                                        <img className={styles.upcomingItem__image} alt="upcoming__image" src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}></img>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </Layout>
            </div>
        )
    }
}

const mapStateToProps = (state: RootState) => ({
    upcomingMovies: upcomingMovies(state),
});
const mapDispatchToProps = {
    loadUpcomingMovies: loadUpcomingMovies,
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
