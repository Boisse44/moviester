import React from 'react';
import Header from '../header/Header';
import styles from './Layout.module.scss';

export default class Layout extends React.Component {
    render() {
        return (
            <div className={styles.layout__container}>
                <Header />
                { this.props.children}
            </div>
        )
    }
}