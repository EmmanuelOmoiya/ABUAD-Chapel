import styles from './Contact.module.css';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

const Contact = () => {
    return (
        <div className={styles.contact_container} id="contact_container">
            <div className={styles.main_contact}>
            <p className={styles.contact_heading}>Contact Us</p>
            <div className={styles.socials_contact}></div>
            <div className={styles.contact_mes}>
                <input type="text" className={styles.message_name} placeholder="Name"/>
                <input type="text" className={styles.message_email} placeholder="E-mail"/>
                <textarea type="text" className={styles.message_message} placeholder="Message"/>
                <button className={styles.send_message}>Send Message</button>
            </div>
            </div>
        </div>
    )
}

export default Contact;