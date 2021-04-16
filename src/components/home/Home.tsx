import React from 'react';
import Layout from '../layout/Layout';
import Trending from '../trending/Trending';
import styles from './Home.module.scss';

class Home extends React.Component {
    render() {
        return (
            <div>
                <Layout>
                    <div className={styles.home__container}>
                        <Trending />
                    </div>
                </Layout>
            </div>
        )
    }
}
export default Home;
