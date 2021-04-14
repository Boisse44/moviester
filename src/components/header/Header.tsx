import React from 'react';
import Search from '../search/Search';
import styles from './Header.module.scss';

export default class Header extends React.Component {
    render() {
        return (
            <div className={styles.header}>
                <span className={styles.header__title}>Moviester</span>
                <Search />
            </div>
        )
    }
}