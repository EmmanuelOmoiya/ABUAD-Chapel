import styles from './Sermons.module.css';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

const Sermons = () => {
    return(
        <div className={styles.sermons_container} id="sermons_container">
            <p className={styles.sermons_text}>Sermons</p>
            <p className={styles.come_to}>Come to our Sermons and get Inspired by the speeches</p>
        </div>
    )
}

export default Sermons