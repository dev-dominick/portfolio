import React from 'react'
import "../styles/projects.css";
import DisplayProjects from "../components/DisplayProjects";
import Footer from '../components/footer';

export default function Projects() {
  return (
    
    <div className='ProjectsPageStyles' id='project-section'>

      <h1 className='workHeader'>My Work</h1>
      <p className='headerInfo'>Here are a few cool projects I have built!</p>

      
        < DisplayProjects />
      
        < Footer />

    </div>
  );
}
