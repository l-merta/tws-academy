//import React from 'react'

import Header from '../sections/Header';
import SectionHeaderMain from '../components/SectionHeaderMain';
import SectionHeader from './../components/SectionHeader';
import TimeBanner from '../sections/TimeBanner';
import Action from '../components/Action';
import Contact from '../sections/Contact';
import Footer from '../sections/Footer';
import Animator from '../managers/Animator';

const Mage = () => {
  return (
    <>
    <Header />
    <main className="hero-main">
      <img className="hero-bg" src="/images/bg/saf_land2.png" alt="" />
      <Animator anim='slide-up' repeat={false}>
        <div className="container blur-effect">
          <div className="hero-text">
            <SectionHeaderMain icon="staff">Čaroděj</SectionHeaderMain>
            <p>Čaroděj je chodící knihovna plná ohnivých kouzel, záhadných formulí a občas i menších výbuchů. Ačkoliv fyzicky zvládne sotva unést vlastní hůl, jeho moc může převrátit průběh celé bitvy. Pokud si zrovna nezamění kouzla.</p>
            <span className="price"><span className="value">600</span> zlaťáků / semestr</span>
            <Action link=''>Zaregistrovat se</Action>
          </div>
          <video autoPlay loop muted playsInline className='hero-img'>
            <source src={"/images/classes/mage_animation_idle.webm"} type="video/webm" />
            Your browser does not support the video tag.
          </video>
        </div>
      </Animator>
    </main>
    <TimeBanner />
    <section id="o-kurzu" className="o-kurzu section-black">
      <SectionHeader icon="swords">Vize kurzu</SectionHeader>
      <div className="text">
        <p>Zvládni umění magie od nejjednoduššího světélka až po mocné zaklínadla ovládající živly. Kurz čaroděje je náročný, ale bohatě odměňující. Naučíš se základy kouzelnických jazyků, tvorbu run, práci s magickými předměty a samozřejmě ochranná kouzla a útoky.</p>
        <p>Výuka se koná každý den kromě neděle – pondělí a středy jsou věnovány teorii a kontrole many, úterky a čtvrtky magické praxi, a pátky experimentům (na vlastní nebezpečí). Soboty patří rituálům a konzultacím s mistry. Kurz je ideální pro ambiciózní jedince, kteří touží po vědění i moci.</p>
        <div className="line"></div>
        <Animator anim='slide-right'>
          <div className="lecturer">
            <div className="person">
              <img src="/images/lecturers/mage.webp" alt="Lektor kurzu" />
              <span className="name">Archimor Veliký</span>
              <span className="role">Lektor čarodějů</span>
            </div>
            <p className='desc'>Archimor je jedním z nejstarších aktivních mágů v regionu. Někdo říká génius, jiný šílenec – pravda je asi někde mezi. Jeho učebny často levitují, mění barvy a občas… explodují. Ale právě jeho hravý a nekonvenční styl výuky studenty baví a inspiruje. Má čarovnou kočku, která občas mluví sprostě.</p>
          </div>
        </Animator>
      </div>
    </section>
    <Contact />
    <Footer />
    </>
  )
}

export default Mage
