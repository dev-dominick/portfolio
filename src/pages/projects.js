import React from 'react'
import "../styles/projects.css";
import Dailymealplanner from "../projectComponents/dailymealplanner";
import Workdayplanner from '../projectComponents/workdayplanner';
import Passwordgenerator from '../projectComponents/Passwordgenerator';
import Codequiz from '../projectComponents/codequiz';
import Notepad from '../projectComponents/notepad';

export default function Projects() {
  return (
    
    <div className='ProjectsContainer' id='project-section'>

      <h1>projects</h1>

      <section class="section-area" id="projects">

        <div class="div-container">

          <Dailymealplanner/>
          <Workdayplanner/>
          <Passwordgenerator/>
          <Codequiz/>
          <Notepad/>

        </div>

      </section>

    </div>
  );
}
