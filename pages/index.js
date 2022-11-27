import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React from 'react';
import { About, Header, Hero, Pastors, Sof, Events, Contact, Footer, Whatwedo, Units, Sermons } from '../components';


const Home = () => {
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
    <div className ={styles.Home_container}>
      <Header />
      <Hero />
      <About />
      <Sof/>
      <Pastors />
      <Whatwedo />
      <Events />
      <Units />
      <Sermons />
      <Contact />
      <Footer />
    </div>
    </>
  )
}

export default Home