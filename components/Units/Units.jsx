import styles from './Units.module.css';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import units from '../../data/units.json';

const Units = () => {
    const [activeIndex, setActiveIndex] = React.useState(0);
    const carouselInfiniteScroll = () => {
        if(activeIndex === units.length-1){
          return setActiveIndex(0);
        }
        return setActiveIndex(activeIndex+1);
    } 
      
    React.useEffect(()=>{
        const interval = setInterval(()=>{carouselInfiniteScroll()}, 3000);
        return () => clearInterval(interval);
    });

    const updateIndex = (newIndex) =>{
        if(newIndex < 0){
            newIndex=0;
        } else if(newIndex >= units.length){
            newIndex = units.length-1;
        }
        setActiveIndex(newIndex);
    }
    return(
        <div className={styles.units_container} id="units">
            <p className={styles.our_units}>Our Units</p>
            <p className={styles.units_in}>Units in ABUAD Chapel</p>
            <div className={styles.all_units}>
                {
                    units.map((unit, index)=>{
                        return(
                            <div className={ `${index === activeIndex ? styles.unit_container_active : styles.unit_container}`} key={index}  style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
                                <img src={unit.img_url} alt="" className={styles.unit_img} />
                                <p className={styles.unit_name}>{unit.unit_name}</p>
                            </div>
                        )
                    })
                }
            </div>
            {/*<p className={styles.prev_unit}>previous</p>
            <p className={styles.next_unit}>Next</p>*/}
        </div>
    )
}

export default Units;