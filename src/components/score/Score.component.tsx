import React, { FC } from 'react';
import styles from './Score.module.scss';

interface ScoreProps {
    score: number;
}

const Score: FC<ScoreProps> = ({score}) => {
    return(
        <div className={styles.score__container}>
            <span className={styles.score__star}></span>
            <span>{score === 0 ? 'Coming Soon' : score}</span>
        </div>
    )
}

export default Score;