//import React from 'react'

import Action from './../components/Action';

const home = () => {
  return (
    <main className="hero-main">
      <img className="hero-bg" src="/images/bg/saf_bg.png" alt="" />
      <div className="container">
        <div className="text">
          <h1>Akademie mýtických postav</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quisquam, illo debitis accusamus accusantium molestias corporis quibusdam pariatur odit nihil itaque tenetur delectus consectetur veniam. Maxime recusandae ducimus tempore. Laborum.</p>
          <Action link='#kurzy' icon='list-tree'>Nabídka kurzů</Action>
        </div>
        <img className="hero-img" src="https://unsplash.it/2000/2000" alt="" />
      </div>
    </main>
  )
}

export default home
