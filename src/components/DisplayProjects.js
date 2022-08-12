import * as React from 'react';


export default function DisplayProjects() {

  let projects = [
    {
      title: 'Daily Meal Planner',
      languages: 'HTML/CSS/JS',
      description: 'insert description here',
      src: 'DailyMealPlanner.png',
      alt: 'Pic of project'
    },
    {
      title: 'Code Quiz',
      languages: 'HTML/CSS/JS',
      description: 'dksafjkasjd;fl',
      src: 'code-quiz.png',
      alt: 'Pic of project'
    },
    {
      title: 'Note Pad',
      languages: 'HTML/CSS/JS',
      description: 'insert description here',
      src: 'note-pad.png',
      alt: 'Pic of project'
    },
    {
      title: 'Password Generator',
      languages: 'HTML/CSS/JS',
      description: 'insert description here',
      src: 'password-generator.png',
      alt: 'Pic of project'
    },
    {
      title: 'Workday Planner',
      languages: 'HTML/CSS/JS',
      description: 'insert description here',
      src: 'planner.png',
      alt: 'Pic of project'
    },
    // {
    //   title: '6',
    //   languages: 'HTML/CSS/JS',
    //   description: 'insert description here'
    // },
    // {
    //   title: '7',
    //   languages: 'HTML/CSS/JS',
    //   description: 'insert description here'
    // },
    // {
    //   title: '8',
    //   languages: 'HTML/CSS/JS',
    //   description: 'insert description here'
    // },
  ]




  return (


    <div class="project-section-area">


      {projects.map(({ title, languages, description, src, alt }) => (


        <div className='project-container'>


          <div className="project-picture view-first">
            <img id='src' src={('/assets-copy/' + src)} alt={alt} />
            <div className='mask'>
            <h4>{ title }</h4>
            <p>{ description }</p>
              <a href='#' className='info'>read more</a>
            </div>
          </div>


          {/* <div className='description-container'>
            <h3>
              {title}
            </h3>
            <p>
              {description}
            </p>
            <div>
              {languages}
            </div>
          </div> */}
        </div>
      ))}
    </div>
  );
}




