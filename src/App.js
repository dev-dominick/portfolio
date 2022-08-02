import { Routes, Route, Link, Switch } from "react-router-dom";

import About from './pages/aboutMe'
import Contact from './pages/contactMe'
import Projects from './pages/projects'
import Home from './pages/home'
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import './App.css'

//import the nav bar component here

function App() {
  return (
      <div className="routesContainer">
        <Navbar />
        <Home/>
        <About/>
        <Projects/>
        <Contact/>
        {/* <Footer /> */}
        <Routes>
          {/* <Switch> */}

            <Route path="/" element={<Home />} />
            
            <Route path="/about" element={<About />} />
            
            {/* <Route path="projects" element={<Projects />} />
            <Route path="contact" element={<Contact />} /> */}
          {/* </Switch> */}
        </Routes>
      </div>
  );
}

export default App;
