import React from 'react'
// import logo from '../logo.svg';
import '../styles/home.css';
import HomeIntro from '../components/homeIntro';
import ParticlesContainer from '../components/Particles';

export default function Home() {

  return (
    <div
     className="Home"
     >
      <ParticlesContainer/>
       
        < HomeIntro />
       
    </div>
  );
}




    

