import React from 'react'
import "../styles/projects.css";
import DisplayProjects from "../components/DisplayProjects";


export default function Projects() {
  return (
    
    <div className='ProjectsContainer' id='project-section'>

      <h1>projects</h1>

      <section class="section-area" id="projects">

        <div class="div-container">

          < DisplayProjects />


        </div>

      </section>

    </div>
  );
}
