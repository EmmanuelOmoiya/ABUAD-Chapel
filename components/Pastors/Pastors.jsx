import styles from './Pastors.module.css';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import pastors from '../../data/pastors.json';

const Pastors = () =>{
    return(
        <div className={styles.pastors_container} key={index}>
            <p className={styles.lead_pastors}>Lead Pastors</p>
            <p className={styles.meet_pastors}>Meet our Pastors</p>
            <div className={styles.pastors_tray}>
                {
                    pastors.map((pastor, index)=>{
                        return (<div className={styles.pastors_details} key={index}>
                            <img src={pastor.img_url} alt={pastor.name} className={styles.pastor_img}/>
                            <p className={styles.pastor_name}>{pastor.name}</p>
                            <p className={styles.pastor_post}>{pastor.post}</p>
                        </div>)
                    })
                }
            </div>
        </div>
    )
}

export default Pastors