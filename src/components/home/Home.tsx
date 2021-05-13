import React, { FC } from 'react';
import Explore from '../explore/Explore.component';
import Trending from '../trending/Trending';
import styles from './Home.module.scss';

const Home: FC = () => {
    return (
        <div>
            <div className={styles.home__container}>
                <Trending />
                <Explore />
            </div>
        </div>
    )
}
export default Home;
