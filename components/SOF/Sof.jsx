import styles from './SOF.module.css';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import Toast  from '../Toast/Toast';

const Sof = () => {
    const [open1, setOpen1] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    const [open3, setOpen3] = React.useState(false);
    React.useEffect(()=>{
        if(open1 == true){
            setOpen2(false);
            setOpen3(false);
        } else if(open2 == true){
            setOpen1(false);
            setOpen3(false);
        } else if(open3 == true){
            setOpen1(false);
            setOpen2(false);
        }
    });
    // const Toggle = ({inp}) => {
    //     `setOpen${inp}`(`!open${inp}`)
    // }
    return(
        <div className={styles.statement_of_faith}>
            {/* <img src="/assets/images/Sof.jpg" alt="Statement of Faith" className={styles.sof_img} /> */}
            <div className={styles.sof_content}>
                <div className={styles.def_faith}>
                    <p className={styles.our_statement}>Our Statement</p>
                    <p className={styles.statementoff}>Statement of Faith</p>
                    <br />
                    <div className={styles.sof_1} >
                        <p className={styles.rte_sof} onClick={()=> setOpen1(!open1)}>Trinity</p>
                        <p className={open1? styles.trin_cont: styles.trin_cont_non}>
                            It is the testimony of both the Old and New Testaments and of the Christian Church that God is both One and Triune/ The biblical
                            revelation testifies that there is only one God and that He is eternally existent in three persons- Father, Son, and Holy Spirit.
                        </p>
                    </div>
                    <div className={styles.sof_2}>
                        <p className={styles.rte_sof} onClick={()=> setOpen2(!open2)}>The Scripture</p>
                        <p className={open2 ? styles.script_cont : styles.script_cont_non}>
                            We affirm that the Bible, containing the Old and New Testaments, is alone the only
                            infallible, inspires Word of God and that is authority is ultimate, final, and eternal. It cannot be added to, subtracted
                            from, or susperseded in any regard. The Bible is the sourc of all doctrine, instruction, correction and reprood. It contains all that is needed for guidance in godliness
                            and practical Christian Conduct.
                        </p>
                    </div>
                    <div className={styles.sof_3}>
                        <p className={styles.rte_sof} onClick={()=> setOpen3(!open3)}>Salvation</p>
                        <p className={open3 ? styles.salva_cont : styles.salva_cont_non}>
                            The Word of God declares clearly that salvation is a free gift of God, based on the meris of the death of His Son, and is appropriated
                            by faith. Salvation is affected by personal repentance, belief in the lord Jesus (justification), and personal acceptance of Him into one's life as Lord and Saviour (regenration)
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sof;