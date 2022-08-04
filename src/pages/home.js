import React from 'react'
// import logo from '../logo.svg';
import '../styles/home.css';
import Navbar from '../components/navbar';
import HomeIntro from '../components/homeIntro';
import videoBG from '../Videos/videoBG.mp4'
import ParticlesContainer from '../components/Particles';

export default function Home() {

  return (
    <div
     className="Home"
     >
      <ParticlesContainer/>
        {/* <video className='video' src={videoBG} autoPlay muted loop /> */}
       
        < HomeIntro />
       
    </div>
  );
}




    

