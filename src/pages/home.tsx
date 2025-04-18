//import React from 'react'

import Header from './../sections/Header';
import SectionHeader from './../components/SectionHeader';
import Action from './../components/Action';
import Banner from './../components/Banner';
import Footer from './../sections/Footer';

const home = () => {
  return (
    <>
    <Header />
    <main className="hero-main">
      <img className="hero-bg" src="/images/bg/saf_bg.png" alt="" />
      <div className="container blur-effect">
        <div className="hero-text">
          <h1>Akademie mýtických postav</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quisquam, illo debitis accusamus accusantium molestias corporis quibusdam pariatur odit nihil itaque tenetur delectus consectetur veniam. Maxime recusandae ducimus tempore. Laborum.</p>
          <Action link='#kurzy' icon='list-tree'>Nabídka kurzů</Action>
        </div>
        <img className="hero-img" src="https://unsplash.it/2000/2000" alt="" />
      </div>
    </main>
    <section className="o-nas section-black">
      <SectionHeader icon="swords">O naší akademii</SectionHeader>
      <div className="text">
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam aut, doloribus nostrum dolorem eligendi, dolores placeat quasi optio, commodi iure doloremque repellat obcaecati beatae aspernatur recusandae odio harum a consectetur. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas minus quam assumenda temporibus alias commodi veniam facilis deleniti? Atque placeat omnis, consectetur maiores nihil mollitia eos fugiat numquam quos consequuntur.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae deserunt aperiam nulla quo sit quos at aut a doloremque ea! Aliquam animi doloribus at labore quo, impedit modi sequi numquam!</p>
        <img src="/images/bg/gif.gif" alt="" />
      </div>
    </section>
    <section className="kurzy section-black">
      <SectionHeader icon="book">Kurzy</SectionHeader>
      <div className="text">
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam aut, doloribus nostrum dolorem eligendi, dolores placeat quasi optio, commodi iure doloremque repellat obcaecati beatae aspernatur recusandae odio harum a consectetur.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae deserunt aperiam nulla quo sit quos at aut a doloremque ea! Aliquam animi doloribus at labore quo, impedit modi sequi numquam!</p>
      </div>
    </section>
    <section className="recenze section-white">
      <SectionHeader icon="star">Recenze</SectionHeader>
      <div className="text">
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam aut, doloribus nostrum dolorem eligendi, dolores placeat quasi optio, commodi iure doloremque repellat obcaecati beatae aspernatur recusandae odio harum a consectetur.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae deserunt aperiam nulla quo sit quos at aut a doloremque ea! Aliquam animi doloribus at labore quo, impedit modi sequi numquam!</p>
      </div>
    </section>
    <section className="banner-section section-black">
      <img className='banner-bg' src="/images/bg/saf_bg2.png" alt="" />
      <Banner 
        action={<Action link='#kurzy' icon='list-tree'>Nabídka kurzů</Action>}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum libero architecto numquam ut nihil. Ducimus numquam laborum exercitationem nemo.
      </Banner>
    </section>
    <section className="kontakt section-black">
      <SectionHeader icon="envelope">Kontakt</SectionHeader>
      <div className="text">
        <p>Dobrý den, tady kontakt</p>
      </div>
    </section>
    <Footer />
    </>
  )
}

export default home
