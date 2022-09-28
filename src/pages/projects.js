import React from 'react'
import "../styles/projects.css";
import DisplayProjects from "../components/DisplayProjects";
import Footer from '../components/footer';

export default function Projects() {
  return (
    
    <div className='ProjectsPageStyles' id='project-section'>

      <h1 className='workHeader'>Projects</h1>

      
        < DisplayProjects />
      
        < Footer />

    </div>
  );
}
