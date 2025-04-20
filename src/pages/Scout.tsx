//import React from 'react'

import Header from './../sections/Header';
import SectionHeaderMain from './../components/SectionHeaderMain';
import Action from './../components/Action';
import Contact from './../sections/Contact';
import Footer from './../sections/Footer';

const Scout = () => {
  return (
    <>
    <Header />
    <main className="hero-main">
      <img className="hero-bg" src="/images/bg/saf_land2.png" alt="" />
      <div className="container blur-effect">
        <div className="hero-text">
          <SectionHeaderMain icon="bow-arrow">Průzkumník</SectionHeaderMain>
          <p>Nikdo ho nevidí přicházet, a když ho spatříš, je už pozdě. Průzkumník spoléhá na rychlost, chytrost a zásadu „první vystřel, pak se ptej“. Je mistr pastí, zákeřností a nečekaných zmizení, ideální pro každého, kdo má rád akci na dálku.</p>
          <Action link=''>Zaregistrovat se</Action>
        </div>
        <video autoPlay loop muted playsInline className='hero-img'>
          <source src={"/images/classes/scout_animation_idle.webm"} type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </div>
    </main>
    <Contact />
    <Footer />
    </>
  )
}

export default Scout
