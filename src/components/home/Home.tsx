import React from 'react';
import { connect } from 'react-redux';
import { loadUpcomingMovies } from '../../store/movies/movies.action';
import { upcomingMovies } from '../../store/movies/movies.selector';
import { RootState } from '../../store/root-reducer.reducer';
import Search from '../search/Search';

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
            <div>
                <Search />
                {this.props.upcomingMovies.map((movie, i) => {
                    return (<img key={i} src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}></img>)
                })}
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
