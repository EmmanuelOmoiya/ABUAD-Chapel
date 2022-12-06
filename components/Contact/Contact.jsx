import styles from './Contact.module.css';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
// import sendEmail from '../../utils/sendEmail';
import axios from 'axios';
// import Toast from '../Toast/Toast'

const Contact = () => {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [body, setBody] = React.useState('');
    const [submitting, setSubmitting] = React.useState(false);
    let data = {name, email, body}
    const SendEmail = (e) => {
        e.preventDefault()
        setSubmitting(true)
        console.log(data)
        // sendEmail(
        //     email,
        //     `Email from ${name} on ABUAD Chapel Website`,
        //     { fullname: name, email: email, body: body }, 
        //     "../../utils/contact.handlebars"
        // );
    
    // fetch('/api/contact', {
    //     method: 'POST',
    //     headers: {
    //       'Accept': 'application/json, text/plain, */*',
    //       'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(data)
    //   }).then((res) => {
    //     console.log('Response received')
    //     if (res.status === 200) {
    //       console.log('Response succeeded!')
    //       setSubmitting(true)
    //       setName('')
    //       setEmail('')
    //       setBody('')
    //     }
    // //   })
    //     if(!email.includes('@' && ".com")){
    //         Toast({ content:"Provide valid Email!", type:"error" });
    //     }
        try{
            axios.post('/api/contact', data)
                .then((res)=>{
                    console.log(res)
                    // Toast({ content: "Mail sent successfully", type: "Success" })
                
                    if(res.status === 200){
                        console.log('Success');
                        setSubmitting(false);
                        setName('');
                        setBody('');
                        setEmail('');
                    } else {
                        alert('failed')
                    }
                })
        } catch(err){
            setSubmitting(false);
            alert(err)
            Toast({ content: {err}, type: "error" })
        }
    }
    return (
        <div className={styles.contact_container} id="contact">
            <div className={styles.main_contact}>
            <p className={styles.contact_heading}>Contact Us</p>
            <div className={styles.socials_contact}></div>
            <div className={styles.contact_mes}>
                <input type="text" className={styles.message_name} placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)} required/>
                <input type="text" className={styles.message_email} placeholder="E-mail" value={email} onChange={(e)=>setEmail(e.target.value)} required pattern="[-!#$%&'*+\/0-9=?ก-๙A-Z^_a-z`{|}~](\.?[-!#$%&'*+\/0-9=?ก-๙A-Z^_a-z`{|}~])*@[ก-๙a-zA-Z0-9](-*\.?[ก-๙a-zA-Z0-9])*\.[ก-๙a-zA-Z](-?[ก-๙a-zA-Z0-9])+$"/>
                <textarea type="text" className={styles.message_message} placeholder="Message" value={body} onChange={(e)=>setBody(e.target.value)} required/>
                {submitting ? 
                 <button className={styles.send_message} style={{opacity:0.8}} disabled={true}>Sending Message...</button>
                 :  
                 <button className={styles.send_message} onClick={(e)=> SendEmail(e)}>Send Message</button> 
                 }
            </div>
            </div>
        </div>
    )
}

export default Contact;