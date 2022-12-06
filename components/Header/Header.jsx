import styles from './Header.module.css';
import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';


const Header = () => {
    const [blur, setBlur] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    React.useEffect(()=>{
        const scrollHander = () => {
            window.pageYOffset > 20 ? setBlur(true) : setBlur(false)
        };
        window.addEventListener('scroll', scrollHander);
        return () => {
            window.removeEventListener('scroll', scrollHander)
        }
    }, [blur]);
    const Toggle = () =>{
        setOpen(!open);
    }
    return(
        <div className={blur ? styles.header_container_blur : styles.header_container}>
            <div className={styles.main_logo}>
                <Link href="/"><Image src={'/assets/images/logo2.png'} alt="ABUAD Chapel" height={60} width={60} /></Link>
                {/* <p className={styles.main_logo_text}>ABUAD Chapel</p> */}
            </div>
            <div className={open ? styles.header_hamburger_active : styles.header_hamburger} onClick={()=>Toggle()}>
                <span className={styles.bar}></span><span className={styles.bar}></span><span className={styles.bar}></span>
            </div>
            <div className={ open ? styles.header_links_active : styles.header_links}>
                <p className={styles.header_link} onClick={()=>Toggle()}><Link href="/">Home</Link></p>
                <p className={styles.header_link}onClick={()=>Toggle()}><Link href="/#about">About Us</Link></p>
                <p className={styles.header_link}onClick={()=>Toggle()}><Link href="/#events">Events</Link></p>
                <p className={styles.header_link}onClick={()=>Toggle()}><Link href="/#units">Units</Link></p>
                <p className={styles.header_link}onClick={()=>Toggle()}><Link href="/#sermons">Sermons</Link></p>
                <p className={styles.header_link}onClick={()=>Toggle()}><Link href="/#contact">Contact Us</Link></p>
                <p className={styles.header_link}onClick={()=>Toggle()}><Link href="">Gallery</Link></p>
                <p className={styles.header_link_pay}onClick={()=>Toggle()}><Link href="/pay">Pay here</Link></p>
            </div>
        </div>
    )
}

export default Header;