import styles from './Events.module.css';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import events from '../../data/events.json';

const Events = () => {
    return(
        <div className={styles.events_container} id="events_container">
            <p className={styles.events}>Activities</p>
            <p className={styles.upcoming}>Upcoming Events</p>
            <div className={styles.events_tray}>
                {
                    events.map((event, index)=>{
                        return(
                            <div className={styles.event_detail} key={index}>
                                <img src={event.img_url} alt="" className={styles.poster} />
                                <p className={styles.poster_title}>{event.title}</p>
                                <p className={styles.poster_description}>{event.description}</p>
                                <button className={styles.getmin}>Learn More</button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Events