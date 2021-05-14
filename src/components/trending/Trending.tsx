import React, { FC, useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import { connect, ConnectedProps } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { loadTrendingMovies } from '../../store/movies/movies.action';
import { trendingMovies } from '../../store/movies/movies.selector';
import { RootState } from '../../store/root-reducer.reducer';
import Score from '../score/Score.component';
import styles from './Trending.module.scss';

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 8
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

type TrendingProps = ReduxProps & RouteComponentProps<{}>;

export const Trending: FC<TrendingProps> = ({trendingMovies, loadTrendingMovies, history}) => {
    const routeChange = (movie: any) => {
        history.push(`/movie/${movie.id}`);
    }

    useEffect(() => {
        if (trendingMovies.length === 0) {
            loadTrendingMovies();
        }
    }, [trendingMovies.length, loadTrendingMovies]);

    return (
        <div className={styles.upcoming__container}>
            <Carousel swipeable={false}
                draggable={false}
                showDots={false}
                responsive={responsive}
                infinite={true}
                autoPlay={false}
                autoPlaySpeed={1000}
                keyBoardControl={true}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                deviceType="desktop">
                {trendingMovies.map((movie, i) => {
                    return (
                        <div key={i} className={styles.trendingItem__container} onClick={() => routeChange(movie)}>
                            <div className={styles.trendingItem__imageContainer}>
                                <img className={styles.trendingItem__image} alt="upcoming__image" src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}></img>
                            </div>
                            <div className={styles.trendingItem__details}>
                                <Score score={movie.vote_average} />
                                <span className={styles.tredingItem__title}>{movie.title}</span>
                            </div>
                        </div>
                    )
                })}
            </Carousel>
        </div>
    )
}

const mapStateToProps = (state: RootState) => ({
    trendingMovies: trendingMovies(state),
});
const mapDispatchToProps = {
    loadTrendingMovies: loadTrendingMovies,
}

const connector = connect(mapStateToProps, mapDispatchToProps);
type ReduxProps = ConnectedProps<typeof connector>;

export default withRouter(connector(Trending));