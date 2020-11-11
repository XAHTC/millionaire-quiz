import React from 'react';
import styles from './index.module.css';
import Logo from "../Home/Logo/logo";
import {Link} from "react-router-dom";

const Finish = ({score}) => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <Logo/>
            </div>
            <div className={styles.item}>
                <p className={styles.total}>Total score:</p>
                <h1 className={styles.title}>
                    {score}
                </h1>
                <div className={styles.btn}>
                    <Link to="/">Try again</Link>
                </div>
            </div>
        </div>
    )
}

export default Finish;