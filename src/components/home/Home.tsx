import React from 'react';
import { connect } from 'react-redux';
import { loadUpcomingMovies } from '../../store/movies/movies.action';
import { upcomingMovies } from '../../store/movies/movies.selector';
import { RootState } from '../../store/root-reducer.reducer';
import Search from '../search/Search';
import styles from './Home.module.scss';

export interface MainProps {
    upcomingMovies: any;
    loadUpcomingMovies: any,
}

class Home extends React.Component<MainProps> {
    componentWillMount() {
        this.props.loadUpcomingMovies();
    }
    render() {
        return (
            <div className={styles.home__container}>
                <Search />
                <div className={styles.upcoming__container}>
                    {this.props.upcomingMovies.map((movie, i) => {
                        return (
                            <div className={styles.upcomingItem__container}>
                                <img className={styles.upcomingItem__image} alt="upcoming__image" key={i} src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}></img>
                            </div>
                        )
                    })}
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
