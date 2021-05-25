import Head from 'next/head';

import React from "react";
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Yunus İNAN | Home</title>
        <link rel="stylesheet" href="/favicon.ico" />
      </Head>
      <div className="section1" id="about">
        <About></About>
      </div>
      <div className="section2" id="projects">
        Projects
        



      </div>
      <div className="section3" id="contact">
        <Contact></Contact>
      </div>
      <Footer></Footer>
    </>


  )
}