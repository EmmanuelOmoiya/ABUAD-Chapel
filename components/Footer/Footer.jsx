import styles from './Footer.module.css';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

const Footer = () => {
    const ler = new Date();
    const year = ler.getFullYear();
    return (
        <div className={styles.footer_container} key={index}>
            <div className={styles.footer_top}>
                <div className={styles.footer_first}>
                    <p className="footer_ftext">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim adipisci omnis, error quisquam hic veniam odit, quidem asperiores maxime consequatur recusandae. Fuga, aut.</p>
                </div>
                <div className={styles.footer_second}>
                    <Image src={'/assets/images/logo2.png'} width={60} height={60} />
                </div>
                <div className={styles.footer_third}>
                    <p className={styles.footer_phone}>+(234) 7043738436</p>
                    <p className={styles.footer_address}>1 Olusegun Obasonjo Street Ado-Ekiti, Ekiti State</p>
                    <p className={styles.footer_mail}>contact@abuadchapel.com</p>
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