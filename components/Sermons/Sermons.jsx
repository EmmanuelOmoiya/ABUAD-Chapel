import styles from './Sermons.module.css';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import sermons from '../../data/sermons.json';

const Sermons = () => {
    const [activeIndex, setActiveIndex] = React.useState(0);
    const carouselInfiniteScroll = () => {
        if(activeIndex === sermons.length-1){
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
        } else if(newIndex >= sermons.length){
            newIndex = sermons.length-1;
        }
        setActiveIndex(newIndex);
    }

    return(
        <div className={styles.sermons_container} id="sermons">
            <p className={styles.sermons_text}>Sermons</p>
            <p className={styles.come_to}>Come to our Sermons and get Inspired by the speeches</p>
            <div className={styles.all_sermons}>
                {
                    sermons.map((sermon, index)=>{
                        return(
                            <>
                    <div className={styles.sermon_concept}  key={index} style={{  transform: `translateX(-${activeIndex * 100}%)`, width:"200rem"}}>
                        <div className={styles.image_r}>
                            <img src={sermon.img_url} width={500} height={400} />
                        </div>
                        <div className={styles.sermon_con_concept}>
                            <p className={styles.sermon_title}>{sermon.sermon_title}</p>
                            <p className={styles.sermon_text}>{sermon.sermon_text}</p>
                            <p className={styles.sermon_preacher}>by <i><b>{sermon.sermon_preacher}</b></i></p>
                            <p className={styles.sermon_word}>{sermon.sermon_word}</p>
                            <p className={styles.read_more}>Read more</p>
                        </div>
                    </div>
                    </>
                    )})
                }
            </div>
            
            <div className={styles.indicators_cnt}>
            {
                    sermons.map((sermon, index)=>{
                        return(
            <p className={`${index === activeIndex ? styles.indicators_active : styles.indicators}`} onClick={()=> updateIndex(index)}>hola{index+1}</p>
            )})
        }
        </div>
        </div>
    )
}

export default Sermons