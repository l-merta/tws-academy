//import React from 'react'

import Header from './../sections/Header';
import Action from './../components/Action';

const home = () => {
  return (
    <>
    <Header></Header>
    <main className="hero-main">
      <img className="hero-bg" src="/images/bg/saf_bg.png" alt="" />
      <div className="container">
        <div className="hero-text">
          <h1>Akademie mýtických postav</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quisquam, illo debitis accusamus accusantium molestias corporis quibusdam pariatur odit nihil itaque tenetur delectus consectetur veniam. Maxime recusandae ducimus tempore. Laborum.</p>
          <Action link='#kurzy' icon='list-tree'>Nabídka kurzů</Action>
        </div>
        <img className="hero-img" src="https://unsplash.it/2000/2000" alt="" />
      </div>
    </main>
    <section className="o-nas section-black">
      <h2>O naší akademii</h2>
      <div className="text">
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam aut, doloribus nostrum dolorem eligendi, dolores placeat quasi optio, commodi iure doloremque repellat obcaecati beatae aspernatur recusandae odio harum a consectetur.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae deserunt aperiam nulla quo sit quos at aut a doloremque ea! Aliquam animi doloribus at labore quo, impedit modi sequi numquam!</p>
      </div>
    </section>
    </>
  )
}

export default home
