import { Routes, Route, Link, BrowserRouter } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import About from './pages/aboutMe'
import Contact from './pages/contactMe'
import Projects from './pages/projects'
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./pages/home";
import './App.css'

//import the nav bar component here

function App() {
  return (
    <div className="routesContainer">
      {/* <Navbar/> */}


        <Routes>
          <Route path="/" element={< Home />} />
          <Route path="/about" element={< About />} />
          <Route path="/projects" element={< Projects />} />
          <Route path="/contact" element={< Contact />} />
        </Routes>
    </div>
  );
}

export default App;
