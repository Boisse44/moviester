import React, { FC } from 'react';
import styles from './Loading.module.scss';

const Loading: FC = () => {
    return (
        <div className={styles.loading__container}><div className={styles.loading__dots}></div></div>
    )
}

export default Loading;