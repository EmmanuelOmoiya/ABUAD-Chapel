import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React from 'react';
import { usePaystackPayment } from 'react-paystack';
import { Footer, Header, Toast } from '../components';
import { useRouter } from 'next/router';

const Pay = () => {
    const [email, setEmail] = React.useState('');
    const [name, setName] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [amount, setAmount] = React.useState('');
    const [option, setOption] = React.useState('Offering');
    const [show, setShow] = React.useState(false);
    const [paying, setPaying] = React.useState(false);
    const router = useRouter();
    const config = {
      reference: (new Date()).getTime().toString(),
      email: email,
      amount: amount+'00',
      publicKey: 'pk_test_1a4effa92156bab9cbdeb4bf8e489318fe171920'
    }

    const onSuccess = (reference) =>{
      router.push('/');
      console.log(reference);
    }

    const onClose = () =>{
      console.log('closed');

    }
    const initializePayment = usePaystackPayment(config);
    const toggle = () => {
      setShow(!show);
    }
    return (
      <>
        <Head>
        <title>Abuad Chapel </title>
          <meta key="keywords" name="keywords" content={`Abuad, Afe Babalola University, Chapel, University Chapel`} />
          <meta
            key="description"
            name="description"
            content="Afe Babalola University (ABUAD) Chapel"
          />
          <meta key="og-title" property="og:title" content="ABUAD Chapel" />
          <meta
            key="og-description"
            property="og:description"
            content="Afe Babalola University (ABUAD) Chapel"
          />
          <meta
            key="og-url"
            property="og:url"
            content={`https://twitter.com/abuadchapel`}
          />
          <meta key="twitter-title" name="twitter:title" content="ABUAD Chapel" />
          <meta
            key="twitter-description"
            name="twitter:description"
            content="Afe Babalola University (ABUAD) Chapel"
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@abuadchapel" />
          <meta
            name="twitter:image"
            content={`/Favicon.svg`}
          />
          <link rel="manifest" href="/manifest.json" />
          <link rel="icon" href="/assets/images/logo2.png" />
        </Head>
        <Header />
        
      <div className ={styles.payment_container}>
        <div className={styles.payment_contain}>
          <div className={styles.payment_modal}>
            <div className={show ? styles.first_modal : styles.first_modal_move}>
              <p className={styles.inplabel}>Name</p>
              <input type="text" className={styles.infoinp} placeholder="Name" onChange={(e)=>setName(e.target.value)}/>
              <p className={styles.inplabel}>Email</p>
              <input type="text" className={styles.infoinp} placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
              <button className={styles.pay_next_btn} onClick={()=>toggle()}>Next &#8594;</button>
            </div>
            <div className={show ? styles.second_modal : styles.second_modal_move}>
              <p className={styles.inplabel}>Purpose</p>
              <select name="" id="" className={styles.pay_options} value={option} onChange={(e)=>setOption(e.target.value)}>
                <option value="Offering" className={styles.pay_option}>Offering</option>
                <option value="Tithe" className={styles.pay_option}>Tithe</option>
              </select>
              <p className={styles.inplabel}>Amount</p>
              <input type="text" className={styles.infoinp} placeholder="Amount" value={amount} onChange={(e)=>setAmount(e.target.value)}/>
              <div className={styles.choose_btns}>
                <button className={styles.back_btn}onClick={()=>toggle()}>&#8592; Back</button>
                <button className={styles.pay_btn} onClick={()=> {initializePayment(onSuccess, onClose)}}>{ paying ? `Chill...` : `Next` } &#8594;</button>
                {/* <button onClick={()=> {initializePayment(onSuccess, onClose)}}>Play</button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      </>
    )
  }
  
  export default Pay