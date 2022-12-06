import styles from './Toast.module.css';
import React from 'react';
import { MdCancel } from 'react-icons/md';
import { BsFillInfoCircleFill } from 'react-icons/bs';
import { IoWarning } from 'react-icons/io5';
import { VscPassFilled } from 'react-icons/vsc';
import { CgDanger } from 'react-icons/cg';

const Toast = ({content, type}) =>{
    const [icon, setIcon] = React.useState();
    const [title, setTitle] = React.useState('');
    const [isClose, setIsClose] = React.useState(false);
    const [style, setStyle] = React.useState(styles.toast_container_success);
    React.useEffect(() => {
        if(type=="success"){
            setIcon(<VscPassFilled/>)
            setTitle('Success');
             setStyle(styles.toast_container_success)
        } else if(type=="warning"){
                setIcon(<IoWarning />);
                setTitle('Warning');
                 setStyle(styles.toast_container_warning)
        } else if(type=="info"){
                    setIcon(<BsFillInfoCircleFill />)
                    setTitle('Info');
                     setStyle(styles.toast_container_info)
        } else if(type=="error"){
            setIcon(<CgDanger />);
            setTitle('Error');
             setStyle(styles.toast_container_error)
        }

    }, [type]);

    setTimeout(()=>{
        setIsClose(true);
    }, 3000)
    
    // const getStyle = () => {
    //     if(type=="success"){
    //         setIcon(<VscPassFilled/>)
    //         setTitle('Success');
    //         // return styles.toast_container_success
    //     } else if(type="error"){
    //         setIcon(<CgDanger />);
    //         setTitle('Error');
    //         // return styles.toast_container_error
    //     } else if(type="warning"){
    //         setIcon(<IoWarning />);
    //         setTitle('Warning');
    //         // return styles.toast_container_warning
    //     } else if(type="info"){
    //         setIcon(<BsFillInfoCircleFill />)
    //         setTitle('Info');
    //         // return styles.toast_container_info
    //     }
    // }
    // getStyle();
    const close = () => {
        setIsClose(!isClose);
    }
    // setTimeout(() => {
    //     setIsClose(!isClose);
    // }, 1500);
    return(
        <div className={isClose ? styles.close_cnt : styles.cnt}>
        <div className={style}>
           <p className={styles.icon}>{icon}</p>
           <div className={styles.toast_cnt}>
            <p className={styles.toast_cnt_title}>{title}</p>
            <p className={styles.toast_content}>{content}</p>
           </div>
           <p className={styles.close} onClick={()=>close()}>X</p>
        </div>
        </div>
    )
}

export default Toast;