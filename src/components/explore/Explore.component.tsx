import classNames from 'classnames';
import React, { FC, useState } from 'react';
import ComingSoon from '../coming-soon/ComingSoon.component';
import Latest from '../latest/Latest.component';
import TopRated from '../top-rated/TopRated.component';
import styles from './Explore.module.scss';

enum ExploreCategory {
    Latest = 'LATEST',
    ComingSoon = 'COMINGSOON',
    TopRated = 'TOPRATED'
};

const Explore: FC = () => {
    const [exploreCategory, setExploreCategory] = useState(ExploreCategory.Latest);

    return (
        <div className={styles.explore__container}>
            <div className={styles.explore__title}>Explore</div>
            <ul className={styles.explore__tabs}>
                <li className={classNames({ [styles.tabs__tab]: true, [styles.active]: exploreCategory === ExploreCategory.Latest})} onClick={() => setExploreCategory(ExploreCategory.Latest)}>Latest</li>
                <li className={classNames({ [styles.tabs__tab]: true, [styles.active]: exploreCategory === ExploreCategory.ComingSoon})} onClick={() => setExploreCategory(ExploreCategory.ComingSoon)}>Coming Soon</li>
                <li className={classNames({ [styles.tabs__tab]: true, [styles.active]: exploreCategory === ExploreCategory.TopRated})} onClick={() => setExploreCategory(ExploreCategory.TopRated)}>Top Rated</li>
            </ul>
            <div>
                <div className={classNames({ [styles.category__container]: true, [styles.active]: exploreCategory === ExploreCategory.Latest})}>
                    <Latest />
                </div>
                <div className={classNames({ [styles.category__container]: true, [styles.active]: exploreCategory === ExploreCategory.ComingSoon})}>
                    <ComingSoon />
                </div>
                <div className={classNames({ [styles.category__container]: true, [styles.active]: exploreCategory === ExploreCategory.TopRated})}>
                    <TopRated />
                </div>
            </div>
        </div>
    )
}

export default Explore;