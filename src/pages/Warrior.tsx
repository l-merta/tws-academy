//import React from 'react'

import Header from './../sections/Header';
import SectionHeaderMain from './../components/SectionHeaderMain';
import SectionHeader from './../components/SectionHeader';
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
          <span className="price"><span className="value">500</span> zlaťáků / semestr</span>
          <Action link=''>Zaregistrovat se</Action>
        </div>
        <video autoPlay loop muted playsInline className='hero-img'>
          <source src={"/images/classes/warrior_animation_idle.webm"} type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </div>
    </main>
    <TimeBanner />
    <section id="o-kurzu" className="o-kurzu section-black">
      <SectionHeader icon="swords">Vize kurzu</SectionHeader>
      <div className="text">
        <p>Staň se opravdovým mistrem meče a obrany. Kurz rytíře tě naučí nejen bojovým technikám od základního šermu až po pokročilé taktiky v bitvách, ale také hodnotám jako je čest, odvaha a loajalita. Součástí výuky je i péče o zbroj, koně a správné použití bitevního pokřiku.</p>
        <p>Praktická výuka probíhá v tréninkové aréně třikrát týdně (pondělí, středa, pátek). Teoretická část včetně historie rytířských řádů a etiky boje se koná vždy v úterý. V rámci kurzu je možné absolvovat duelový turnaj a obdržet titul „Ocelový adept“.</p>
        <div className="lecturer">
          <div className="person">
            <img src="/images/lecturers/knight.jpg" alt="Lektor kurzu" />
            <span className="name">Sir Balthar Železný</span>
            <span className="role">Lektor rytířů</span>
          </div>
          <p className='desc'>Balthar je veterán stovek bitev, nositel osmi vyznamenání a bývalý velitel Královské hradní stráže. Tvrdý, ale spravedlivý – jeho výuka je náročná a bez výmluv. Věří, že opravdový rytíř musí nejdřív zkrotit své ego, než popadne meč. Má neochvějný smysl pro čest a slabost pro medovinu.</p>
        </div>
      </div>
    </section>
    <Contact />
    <Footer />
    </>
  )
}

export default Warrior
