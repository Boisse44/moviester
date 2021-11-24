import React, { FC } from 'react';
import { RouteComponentProps } from 'react-router';
import { withRouter } from 'react-router-dom';
import { ReactComponent as GithubLogo } from '../../images/github-icon.svg';
import Search from '../search/Search';
import styles from './Header.module.scss';

export const Header: FC<RouteComponentProps> = ({history}) => {
    const routeChange = () => {
        history.push('/');
    }
        return (
            <div className={styles.header}>
                <div className={styles.header__logo} onClick={() => routeChange()}></div>
                <Search />
                <a target="_blank" href="https://github.com/Boisse44/moviester"><GithubLogo className={styles.header__repo}/></a>
            </div>
        )
}

export default withRouter(Header);