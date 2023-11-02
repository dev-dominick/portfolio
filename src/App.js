import { Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import About from "./pages/aboutMe";
import Projects from "./pages/projects";
import Contact from "./pages/contactMe";

import "./styles/AppStyles/App.css";

const App = () => {
  return (
    <div className="routesContainer">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
