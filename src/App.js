import { Routes, Route } from "react-router-dom";
import About from './pages/aboutMe'
import Contact from './pages/contactMe'
import Projects from './pages/projects'
import Home from './pages/home'
import './App.css'

//import the nav bar component here

function App() {
  return (
      <div className="routesContainer">
        <Routes>
          <Route path="/react-portfolio/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </div>
  );
}

export default App;
