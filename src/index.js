import React from 'react';
import ReactDOM from 'react-dom/client';
// routing
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
import Navbar from './components/navbar';
import Socials from './components/socials';
import Footer from './components/footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      < Navbar />
      < App />
      < Socials />
      {/* < Footer /> */}
    </BrowserRouter>
  </React.StrictMode>
);


