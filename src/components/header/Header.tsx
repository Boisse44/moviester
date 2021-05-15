import React from 'react';
import { ReactComponent as GithubLogo } from '../../images/github-icon.svg';
import Search from '../search/Search';
import styles from './Header.module.scss';

export default class Header extends React.Component {
    render() {
        return (
            <div className={styles.header}>
                <div className={styles.header__logo}></div>
                <Search />
                <a target="_blank" href="https://github.com/Boisse44/moviester"><GithubLogo className={styles.header__repo}/></a>
            </div>
        )
    }
}