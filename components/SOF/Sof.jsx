import styles from './SOF.module.css';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

const Sof = () => {
    return(
        <div className={styles.statement_of_faith}>
            {/* <img src="/assets/images/Sof.jpg" alt="Statement of Faith" className={styles.sof_img} /> */}
            <div className={styles.sof_content}>
                <div className={styles.def_faith}>
                    <p className={styles.our_statement}>Our Statement</p>
                    <p className={styles.statementoff}>Statement of Faith</p>
                    <br />
                    <p className={styles.rte_sof}>Trinity</p>
                    <p className={styles.rte_sof}>The Scripture</p>
                    <p className={styles.rte_sof}>Salvation</p>
                </div>
            </div>
        </div>
    )
}

export default Sof;