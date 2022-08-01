import React from 'react'
// import logo from '../logo.svg';
// import AdbIcon from "@mui/icons-material/Adb";
import '../App.css';
import ParticlesContainer from './particles.js';

export default function Home() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}

        <main>
          {/* <h1></h1> */}
          <ParticlesContainer />
        </main>
      </header>
    </div>
  );
}
