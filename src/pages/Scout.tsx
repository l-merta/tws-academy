//import React from 'react'

import Header from './../sections/Header';
import SectionHeaderMain from './../components/SectionHeaderMain';
import SectionHeader from './../components/SectionHeader';
import TimeBanner from '../sections/TimeBanner';
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
          <span className="price"><span className="value">400</span> zlaťáků / semestr</span>
          <Action link=''>Zaregistrovat se</Action>
        </div>
        <video autoPlay loop muted playsInline className='hero-img'>
          <source src={"/images/classes/scout_animation_idle.webm"} type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </div>
    </main>
    <TimeBanner />
    <section id="o-kurzu" className="o-kurzu section-black">
      <SectionHeader icon="swords">Vize kurzu</SectionHeader>
      <div className="text">
        <p>Být průzkumníkem není jen o tichém pohybu. Tento kurz tě naučí jak se nepozorovaně pohybovat, orientovat se v divočině a přežít v těch nejdrsnějších podmínkách. Důraz klademe na lukostřelbu, pastičkářství, základy alchymie a především rychlé rozhodování v terénu.</p>
        <p>Výuka probíhá převážně venku – lesy, ruiny a tajemné jeskyně jsou tvou třídou. Praktické výpravy se konají vždy o víkendech, zatímco pondělní večery patří teoriím, mapování a strategii. Kurz je ideální pro samotáře i týmové hráče se sklonem k dobrodružství.</p>
        <div className="lecturer">
          <div className="person">
            <img src="/images/lecturers/scout.webp" alt="Lektor kurzu" />
            <span className="name">Sylia Tichý Stín</span>
            <span className="role">Lektorka průzkumníků</span>
          </div>
          <p className='desc'>Sylia vyrůstala mezi stromy a stíny – doslova. Je bývalou zvědkyní Lesní aliance, která přežila deset let v Zakázaném hvozdu a nikdy nebyla spatřena. Učí své studenty, že pravý průzkumník nespoléhá jen na luk, ale hlavně na instinkt. Mluví potichu, ale každé její slovo má váhu. Zmizí rychleji, než stačíš mrknout.</p>
        </div>
      </div>
    </section>
    <Contact />
    <Footer />
    </>
  )
}

export default Scout
