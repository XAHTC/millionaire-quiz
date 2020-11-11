import React from 'react';
import hand from './hand.svg';
import styles from './Logo.module.css'

const Logo = () => {
    return (
        <div className={styles.image}>
            <img src={hand} alt="hand"/>
        </div>
    );
}

export default Logo;