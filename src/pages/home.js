import React from 'react'
// import logo from '../logo.svg';
import '../styles/home.css';
import Navbar from '../components/navbar';
import HomeIntro from '../components/homeIntro';
export default function Home() {

  return (
  // <div>
  //   <Navbar/>
    <div className="Home">
      <header className="Home-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}

        < HomeIntro />
       
      </header>
    </div>
    // </div>
  );
}
