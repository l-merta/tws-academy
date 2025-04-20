//import React from 'react'

import Header from './../sections/Header';
import SectionHeaderMain from './../components/SectionHeaderMain';
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
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quisquam, illo debitis accusamus accusantium molestias corporis quibusdam pariatur odit nihil itaque tenetur delectus consectetur veniam. Maxime recusandae ducimus tempore. Laborum.</p>
          <Action link=''>Zaregistrovat se</Action>
        </div>
        <video autoPlay loop muted playsInline className='hero-img'>
          <source src={"/images/classes/warrior_animation_idle.webm"} type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </div>
    </main>
    <Contact />
    <Footer />
    </>
  )
}

export default Warrior
