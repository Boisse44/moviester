import React from 'react';
import Carousel from 'react-multi-carousel';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { loadTrendingMovies } from '../../store/movies/movies.action';
import { trendingMovies } from '../../store/movies/movies.selector';
import { RootState } from '../../store/root-reducer.reducer';
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

export interface MainProps {
    trendingMovies: any;
    loadTrendingMovies: any,
    history: any
}


class Trending extends React.Component<MainProps> {
    routeChange = (movie: any) => {
        this.props.history.push(`/movie/${movie.id}`);
    }
    componentWillMount() {
        this.props.loadTrendingMovies();
    }
    render() {
        return (<div className={styles.upcoming__container}>
            <Carousel swipeable={false}
                draggable={false}
                showDots={false}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={false}
                autoPlaySpeed={1000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                deviceType="desktop">
                {this.props.trendingMovies.map((movie, i) => {
                    return (
                        <div key={i} className={styles.trendingItem__container} style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.poster_path})` }} onClick={() => this.routeChange(movie)}>
                            <img className={styles.trendingItem__image} alt="upcoming__image" src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}></img>
                        </div>
                    )
                })}
            </Carousel>
        </div>)
    }
}

const mapStateToProps = (state: RootState) => ({
    trendingMovies: trendingMovies(state),
});
const mapDispatchToProps = {
    loadTrendingMovies: loadTrendingMovies,
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Trending));