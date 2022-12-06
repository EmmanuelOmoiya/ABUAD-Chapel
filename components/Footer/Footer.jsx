import styles from './Footer.module.css';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { BsTwitter, BsInstagram, BsFacebook, BsYoutube } from'react-icons/bs';
import { IoCall } from 'react-icons/io5';
import { MdLocationPin } from 'react-icons/md';
import { HiOutlineMail } from 'react-icons/hi';

const Footer = () => {
    const ler = new Date();
    const year = ler.getFullYear();
    return (
        <div className={styles.footer_container} >
            <div className={styles.footer_top}>
                <div className={styles.footer_first}>
                    <p className={styles.footer_ftext}>God has impacted many lives through ABUAD Chapel. Come to our sermons and join the fellowship.</p>
                    <div className={styles.footer_icons}>
                    <Link href="https://www.instagram.com/abuadchapel"><p className={styles.footer_icon}><BsInstagram/></p></Link>
                        <Link href="/"><p className={styles.footer_icon}><BsFacebook/></p></Link>
                        <Link href="https://www.twitter.com/@abuad_chapel"><p className={styles.footer_icon}><BsTwitter/></p></Link>
                        <Link href="https://m.youtube.com/@abuadchapel8214"><p className={styles.footer_icon}><BsYoutube/></p></Link>
                    </div>
                </div>
                <div className={styles.footer_second}>
                    <Image src={'/assets/images/logo2.png'} width={60} height={60} />
                </div>
                <div className={styles.footer_third}>
                    <p className={styles.footer_phone}><p className={styles.footer_icon}><IoCall /></p>+(234) 7043738436</p>
                    <p className={styles.footer_address}><p className={styles.footer_icon}><MdLocationPin /></p>1 Olusegun Obasonjo Street Ado-Ekiti, Ekiti State</p>
                    <Link href="mailto:abuadchapel@gmail.com" ><p className={styles.footer_mail}><p className={styles.footer_icon}><HiOutlineMail /></p>abuadchapel@gmail.com</p></Link>
                </div>
            </div>
            <div className={styles.footer_bottom}>
                <hr className={styles.hr}/>
                <p className={styles.footer_copyright}>&copy; Copyright | D Stack 🧢 {year}. All rights Reserved</p>
            </div>
        </div>
    )
}

export default Footer;