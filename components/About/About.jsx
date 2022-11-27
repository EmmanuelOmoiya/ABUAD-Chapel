import styles from './About.module.css';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

const About = () => {
    return (
        <div className={styles.about_container} id="about_container">
            <div className={styles.about_text}>
                <p className={styles.welcome_text}>Welcome</p>
                <p className={styles.textabtchr}>About Our Chapel</p>
                <p className={styles.about_content}>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, fuga sint minima cum quia delectus dicta perferendis, consequatur officia quidem voluptatem vero fugit deserunt nesciunt quod consequuntur sit dolor ut porro iusto fugiat debitis voluptatibus? Explicabo earum similique optio?</p>
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