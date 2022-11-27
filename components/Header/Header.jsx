import styles from './Header.module.css';
import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';


const Header = () => {
    const [blur, setBlur] = React.useState(false);
    React.useEffect(()=>{
        const scrollHander = () => {
            window.pageYOffset > 20 ? setBlur(true) : setBlur(false)
        };
        window.addEventListener('scroll', scrollHander);
        return () => {
            window.removeEventListener('scroll', scrollHander)
        }
    }, [blur])
    return(
        <div className={blur ? styles.header_container_blur : styles.header_container}>
            <div className={styles.main_logo}>
                <Image src={'/assets/images/logo2.png'} alt="ABUAD Chapel" height={60} width={60} />
                {/* <p className={styles.main_logo_text}>ABUAD Chapel</p> */}
            </div>
            <div className={styles.header_hamburger}>
                <span className={styles.bar}></span><span className={styles.bar}></span><span className={styles.bar}></span>
            </div>
            <div className={styles.header_links}>
                <p className={styles.header_link}><Link href="/">Home</Link></p>
                <p className={styles.header_link}><Link href="#about_container">About Us</Link></p>
                <p className={styles.header_link}><Link href="#events_container">Events</Link></p>
                <p className={styles.header_link}><Link href="#units_container">Units</Link></p>
                <p className={styles.header_link}><Link href="#sermons_container">Sermons</Link></p>
                <p className={styles.header_link}><Link href="#contact_container">Contact Us</Link></p>
                <p className={styles.header_link}><Link href="">Gallery</Link></p>
            </div>
        </div>
    )
}

export default Header;