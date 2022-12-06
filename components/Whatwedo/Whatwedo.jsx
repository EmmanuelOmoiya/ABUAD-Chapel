import styles from './Whatwedo.module.css';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

const Whatwedo = () => {
    return (
        <div className={styles.whatwedo_container}>
            <div className={styles.wha_cover1}>
                {/* <img src="/assets/images/whacover1.jpg" alt="" className={styles.whacoverbg} /> */}
                <div className={styles.what_first}>
                <p className={styles.whfir_number}>24</p>
                <div className={styles.wha_content}>
                    <p className={styles.wha_title}>Sunday Gatherings</p>
                    <p className={styles.wha_content}>Whether it&apos;s your first time at church or you&#39;ve gone to church for year, our Sunday gatherings are a welcoming place for you to enjoy worshipping Jesus with others</p>
                </div>
            </div>
            </div>
            <div className={styles.wha_cover2}>
                <div className={styles.what_second}>
                <p className={styles.whsec_number}>15</p>
                <div className={styles.wha_content}>
                <p className={styles.wha_title}>KidSpring</p>
                    <p className={styles.wha_content}>Every Sunday, all children (babies through secndary school) experience safe, age-appropriate environments where the Bible is taught in a creative and releant way.</p>
                </div>
            </div>
            </div>
            <div className={styles.wha_cover3}>
             <div className={styles.what_third}>
                <p className={styles.whthi_number}>27</p>
                <div className={styles.wha_content}>
                <p className={styles.wha_title}>Fuse</p>
                <p className={styles.wha_content}>Our ministry for students gives them a fun place to connect with God and others, so they will lead the next generation of the chapel and change the University / World.</p>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Whatwedo