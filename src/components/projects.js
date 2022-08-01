import React from 'react'
import "./projects.css";
import Dailymealplanner from "./dailymealplanner";
import Workdayplanner from './workdayplanner';
import Passwordgenerator from './Passwordgenerator';
import Codequiz from './codequiz';
import Notepad from './notepad';

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
