import * as React from 'react';


export default function DisplayProjects() {

  let projects = [
    {
      title: 'Daily Meal Planner',
      languages: 'HTML/CSS/JS',
      description: 'Easy way to plan healthier meals',
      src: 'DailyMealPlanner.png',
      alt: 'Pic of project',
      repo: 'https://github.com/dev-dominick/daily-meal-planner',
      site: 'https://dev-dominick.github.io/daily-meal-planner/'
    },
    {
      title: 'Code Quiz',
      languages: 'HTML/CSS/JS',
      description: 'Test your knowledge on development topics',
      src: 'code-quiz.png',
      alt: 'Pic of project',
      repo: 'https://github.com/dev-dominick/code-quiz',
      site: 'https://dev-dominick.github.io/code-quiz/'
    },
    {
      title: 'Note Pad',
      languages: 'HTML/CSS/JS',
      description: 'Jot your notes down with my note tracking app',
      src: 'note-pad.png',
      alt: 'Pic of project',
      repo: 'https://github.com/dev-dominick/note-pad',
      site: 'https://arcane-citadel-42917.herokuapp.com/notes'
    },
    {
      title: 'Password Generator',
      languages: 'HTML/CSS/JS',
      description: 'Create a unique and secure password with my password generator',
      src: 'password-generator.png',
      alt: 'Pic of project',
      repo: 'https://github.com/dev-dominick/password-generator',
      site: 'https://dev-dominick.github.io/password-generator/'
    },
    {
      title: 'Workday Planner',
      languages: 'HTML/CSS/JS',
      description: 'A simple way to track your tasks for the day',
      src: 'planner.png',
      alt: 'Pic of project',
      repo: 'https://github.com/dev-dominick/work-day-planner',
      site: 'https://dev-dominick.github.io/work-day-planner/'
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


      {projects.map(({ title, languages, description, src, alt, repo, site }) => (


        <div className='project-container'>


          <div className="project-picture view-first">
            <img id='src' src={('/assets-copy/' + src)} alt={alt} />
            <a href={`${ repo }`}>
              <img className='githubMark' src={require('../assets/github-64-dark.png')} alt={"GitHub"}></img>
            </a>
            <a href={`${ site }`}>
              <img className='livesiteMark' src={require('../assets/livesite.png')} alt={"Live Site"}></img>
            </a>
            <div className='mask'>
            <h4>{ title }</h4>
            <p>{ description }</p>
              {/* <a href='#' className='info'>read more</a> */}
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




