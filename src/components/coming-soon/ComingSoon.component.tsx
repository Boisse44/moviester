import React, { FC, useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { withRouter } from 'react-router';
import { loadUpcomingMovies } from '../../store/movies/movies.action';
import { upcomingMovies } from '../../store/movies/movies.selector';
import { RootState } from '../../store/root-reducer.reducer';

type ComingSoonProps = ReduxProps;

export const ComingSoon: FC<ComingSoonProps> = ({upcomingMovies, loadUpcomingMovies}) => {
    useEffect(() => {
        if (upcomingMovies.length === 0) {
            loadUpcomingMovies();
        }
    }, [upcomingMovies.length, loadUpcomingMovies]);
    return (
        <div>
            <div>Coming Soon</div>
        </div>
    )
}

const mapStateToProps = (state: RootState) => ({
    upcomingMovies: upcomingMovies(state),
});
const mapDispatchToProps = {
    loadUpcomingMovies: loadUpcomingMovies,
}

const connector = connect(mapStateToProps, mapDispatchToProps);
type ReduxProps = ConnectedProps<typeof connector>;

export default withRouter(connector(ComingSoon));