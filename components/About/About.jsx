import styles from './About.module.css';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

const About = () => {
    return (
        <div className={styles.about_container} id="about">
            <div className={styles.about_text}>
                <p className={styles.welcome_text}>Welcome</p>
                <p className={styles.textabtchr}>About Our Chapel</p>
                <p className={styles.about_content}>At ABUAD Chapel you won&#39;t be met with shame, guilt or condemnation. No matter what you&apos;ve been through or what questions you might have, the chapel is a place where you&apos;ll find the grace, mercy and forgiveness. Jesus gives to everyone.</p>
                <p className={styles.about_prompt}>Come and be part of our family this Sunday</p>
                <p className={styles.watch_vid}>Watch Video</p>
            </div>
            <div className={styles.about_video}>
                <p className={styles.vid}>Video.mp4</p>
            </div>
        </div>
    )
}

export default About;