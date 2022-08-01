import React from 'react';
import ReactDOM from 'react-dom/client';
// routing
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';

// importing nav and footer components
import Navbar from './components/navbar.js'
import Footer from './components/footer.js'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <App />
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);


