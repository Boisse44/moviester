import React from 'react';
import Search from '../search/Search';
import styles from './Header.module.scss';

export default class Header extends React.Component {
    render() {
        return (
            <div className={styles.header}>
                <div className={styles.header__logo}></div>
                <Search />
            </div>
        )
    }
}