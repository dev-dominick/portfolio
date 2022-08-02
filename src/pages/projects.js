import React from 'react'
import "../styles/projects.css";
import Dailymealplanner from "../components/dailymealplanner";
import Workdayplanner from '../components/workdayplanner';
import Passwordgenerator from '../components/Passwordgenerator';
import Codequiz from '../components/codequiz';
import Notepad from '../components/notepad';

export default function Projects() {
  return (
    
    <div>
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
