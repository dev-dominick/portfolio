import React from 'react'
// import logo from '../logo.svg';
import '../styles/home.css';
import HomeIntro from '../components/homeIntro';
import ParticlesContainer from '../components/Particles';
import Footer from '../components/footer';
export default function Home() {

  return (
    <div
      className="Home"
    >
      <ParticlesContainer />

      < HomeIntro />
      < Footer />

    </div>
  );
}






