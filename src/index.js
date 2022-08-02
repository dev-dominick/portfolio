import React from 'react';
import ReactDOM from 'react-dom/client';
// routing
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';

// importing nav and footer components
import Navbar from './components/navbar.js'
import Footer from './components/footer.js'
import Home from './pages/home';
import About from './pages/aboutMe';
import Projects from './pages/projects';
import Contact from './pages/contactMe';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    
      <App />
     
     
    </BrowserRouter>
  </React.StrictMode>
);


