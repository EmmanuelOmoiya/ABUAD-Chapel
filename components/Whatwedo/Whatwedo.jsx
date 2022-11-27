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
                    <p className={styles.wha_content}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam labore, quaerat officia repudiandae qui natus expedita neque minima. Aliquid corrupti minus temporibus ratione quia?</p>
                </div>
            </div>
            </div>
            <div className={styles.wha_cover2}>
                <div className={styles.what_second}>
                <p className={styles.whsec_number}>15</p>
                <div className={styles.wha_content}>
                <p className={styles.wha_title}>KidSpring</p>
                    <p className={styles.wha_content}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, quis quod nobis, perferendis nisi odit libero enim eveniet accusamus iure expedita placeat laudantium veritatis!</p>
                </div>
            </div>
            </div>
            <div className={styles.wha_cover3}>
             <div className={styles.what_third}>
                <p className={styles.whthi_number}>27</p>
                <div className={styles.wha_content}>
                <p className={styles.wha_title}>Fuse</p>
                <p className={styles.wha_content}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut maxime aspernatur sequi amet, iure nihil voluptatum. Ipsa quasi atque delectus fugiat asperiores iste saepe?</p>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Whatwedo