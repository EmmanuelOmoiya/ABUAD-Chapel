import styles from './Units.module.css';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

const Units = () => {
    return(
        <div className={styles.units_container} id="units_container">
            <p className={styles.our_units}>Our Units</p>
            <p className={styles.units_in}>Units in ABUAD Chapel</p>
        </div>
    )
}

export default Units;