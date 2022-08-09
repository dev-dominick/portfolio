import React from 'react'
import '../styles/homeintro.css'
import Socials from './socials'

function HomeIntro() {
  return (
    <div className='homeIntroContainer' >
      <h1 className='name'>Dominick Albano</h1>
      <h2 className='title'>Full Stack Web Developer</h2>
      <div className='socials'>
        < Socials />
      </div>

    </div>
  )
}

export default HomeIntro