import React from 'react'
import '../styles/aboutMe.css'
import Footer from '../components/footer';


export default function About() {
  return (
    <div className='AboutContainer' id='about-section'>

      <h1 className="header">About Me</h1>

      <div class='aboutIntro'>
        <div className='textContainer'>

          <p className="aboutMeText">
            A Full-stack web developer with experience building custom software and web applications.
            Passionate about building reusable and scalable code.  Looking forward to building and contributing to projects
            with my knowledge of multiple programming technologies.
          </p>

          <a class='btnLink' href={require('../assets/DeveloperResume.pdf')} target='_blank' rel='noreferrer'>
            <span className='resumeBtn'>Download Resume</span>
          </a>
        </div>

        <div className='pictureContainer'>
          <img className='aboutImg'
            src={require('../assets/aboutMePic.jpg')}
            alt='Laptop on Desk'></img>
        </div>
      </div>

      <div className='footerContainer'>
        < Footer />
      </div>
    </div>
  );
}
