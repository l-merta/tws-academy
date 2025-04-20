//import React from 'react'

import Header from '../sections/Header';
import SectionHeaderMain from '../components/SectionHeaderMain';
import Action from '../components/Action';
import Contact from '../sections/Contact';
import Footer from '../sections/Footer';

const Mage = () => {
  return (
    <>
    <Header />
    <main className="hero-main">
      <img className="hero-bg" src="/images/bg/saf_land2.png" alt="" />
      <div className="container blur-effect">
        <div className="hero-text">
          <SectionHeaderMain icon="staff">Čaroděj</SectionHeaderMain>
          <p>Čaroděj je chodící knihovna plná ohnivých kouzel, záhadných formulí a občas i menších výbuchů. Ačkoliv fyzicky zvládne sotva unést vlastní hůl, jeho moc může převrátit průběh celé bitvy. Pokud si zrovna nezamění kouzla.</p>
          <Action link=''>Zaregistrovat se</Action>
        </div>
        <video autoPlay loop muted playsInline className='hero-img'>
          <source src={"/images/classes/mage_animation_idle.webm"} type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </div>
    </main>
    <Contact />
    <Footer />
    </>
  )
}

export default Mage
