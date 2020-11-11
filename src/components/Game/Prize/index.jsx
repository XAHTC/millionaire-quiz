import React from "react"
import styles from './index.module.css'


const Prize = ({currentMoney, money, isAnswered}) => {

    return (
        <div className={styles.prizeWrapper}>
            {currentMoney === money ? (
                <div className={`${styles.prizeContainerCurrent} ${styles.prizeContainer}`}>
                    <div className={`${styles.prizeCurrent} ${styles.prize}`}>
                        <span>{money}</span>
                    </div>
                </div>
            ) : (
                <div className={styles.prizeContainer}>
                    <div className={styles.prize}>
                        <span className={isAnswered ? styles.answered : ''}>{money}</span>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Prize;