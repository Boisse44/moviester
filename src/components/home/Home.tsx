import React from 'react';
import Trending from '../trending/Trending';
import styles from './Home.module.scss';

class Home extends React.Component {
    render() {
        return (
            <div>
                    <div className={styles.home__container}>
                        <Trending />
                    </div>
            </div>
        )
    }
}
export default Home;
