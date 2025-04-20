//import React from 'react'

import Header from './../sections/Header';
import SectionHeaderMain from './../components/SectionHeaderMain';
import TimeBanner from '../sections/TimeBanner';
import Action from './../components/Action';
import Contact from './../sections/Contact';
import Footer from './../sections/Footer';

const Warrior = () => {
  return (
    <>
    <Header />
    <main className="hero-main">
      <img className="hero-bg" src="/images/bg/saf_land2.png" alt="" />
      <div className="container blur-effect">
        <div className="hero-text">
          <SectionHeaderMain icon="swords">Rytíř</SectionHeaderMain>
          <p>Rytíř je opora každé výpravy. Silný, statečný a dost tvrdohlavý na to, aby šel první i do úplně zbytečné pasti. S mečem v ruce a hlavou v oblacích chrání ostatní – často i před problémy, které sám způsobil.</p>
          <Action link=''>Zaregistrovat se</Action>
        </div>
        <video autoPlay loop muted playsInline className='hero-img'>
          <source src={"/images/classes/warrior_animation_idle.webm"} type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </div>
    </main>
    <TimeBanner />
    <Contact />
    <Footer />
    </>
  )
}

export default Warrior
