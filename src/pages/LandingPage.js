import React from 'react'
import Home from './home'
import About from './aboutMe'
import Projects from './projects'

import "../styles/landingpage.css";

function LandingPage() {
  return (
    <div>
      <div className='landingPage-container'>
          < Home />
          < About />
          < Projects />
      </div>
    </div>
  )
}

export default LandingPage