import React from 'react'
import "../styles/projects.css";
import DisplayProjects from "../components/DisplayProjects";


export default function Projects() {
  return (
    
    <div className='ProjectsPageStyles' id='project-section'>

<h1>Projects</h1>
<p>Here are a few cool projects I have built!</p>

      
        < DisplayProjects />
      

    </div>
  );
}
