import styles from './Hero.module.css';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import data from '../../data/carousel.json';

const Hero = () =>{
const [currentIndex, setCurrentIndex] = React.useState(0);
const carouselInfiniteScroll = () => {
  if(currentIndex === data.length-1){
    return setCurrentIndex(0);
  }
  return setCurrentIndex(currentIndex+1);
} 
console.log(data)

React.useEffect(()=>{
    const interval = setInterval(()=>{carouselInfiniteScroll()}, 2000);
    return () => clearInterval(interval);
  })
  

    return(
        <div className={styles.hero_container}>
            {/* <Image src={} alt={} width={} height={} /> */}
            <div className={styles.hero_carousel}>
          {
            data.map((item, index)=>{
                return (
                    <div className={styles.carousel} key={index}>
                        <div className={styles.carousel_content}>
                            <div className={styles.carousel_content_center}>
                                <p className={styles.main_heading}>{item.heading}</p>
                                {/* <p className={styles.sub_heading}>{item.sub_heading}</p> */}
                                <p className={styles.main_heading_content}>{item.main_content}</p>
                                {/* <button className={styles.hero_batn}><Link href={item.btn_route} >{item.btn_content}</Link></button> */}
                            </div>
                        </div>
                    <img src={item.image_url} alt="" className={styles.carousel_img}/>
                    </div>
                )
                // <p className={styles.carousel_item} key={index}  style={{ transform:`translateY(-${currentIndex * 10}rem)` }} >{item}</p>
            })
          }
          </div>
        </div>
    )
}

export default Hero