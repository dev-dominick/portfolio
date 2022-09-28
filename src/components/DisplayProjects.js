import * as React from 'react';
import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '42rem',
  height: '27rem',
  borderRadius: '2rem',
  bgcolor: 'grey !important',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  padding: '25px'
};


export default function DisplayProjects() {

  const [open, setOpen] = React.useState(false);

  const [apple, setApple] = React.useState(null);

  React.useEffect(() => {
    console.log(apple);
  }, [apple])


  const handleOpen = (p) => {
    setApple(p);
    setOpen(true);
  }

  const handleClose = () => {
    setApple(null);
    setOpen(false);
  }

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

      <Modal
        open={open}
        onClose={handleClose}
      // aria-labelledby="modal-modal-title"
      // aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className='modalInfoContainer'>
            <h1 className='modalTtitle'>
              {apple && apple.title}
            </h1>

            <div className='modalPictureContainer'>
              <img className='modalPicture' src={'/assets-copy/' + ( apple && apple.src )} alt={apple && apple.alt} />

            </div>

            <h3 className='modalText'>{ apple && apple.description }</h3>
            <h3 className='modalText'>{ apple && apple.languages }</h3>


            <div className='linkBox'>
              <a href={`${apple && apple.repo}`}>
                <img className='githubMark' src={require('../assets/github-64-dark.png')} alt={"GitHub"}></img>
              </a>
              <a href={`${apple && apple.site}`}>
                <img className='livesiteMark' src={require('../assets/livesite.png')} alt={"Live Site"}></img>
              </a>
            </div>
          </div>
        </Box>
      </Modal>


      {projects.map((p) => (


        <div className='project-container' onClick={() => handleOpen(p)}>


          <div className="project-picture view-first">

            <img id='src' src={('/assets-copy/' + p.src)} alt={p.alt} />


            {/* mask */}
            <div className='mask'>
              <h4>{p.title}</h4>
              <p>{p.description}</p>
              {/* <a href='#' className='info'>read more</a> */}
            </div>
          </div>

          {/* <div className='linkBox'>
            <a href={`${ p.repo }`}>
              <img className='githubMark' src={require('../assets/github-64-dark.png')} alt={"GitHub"}></img>
            </a>
            <a href={`${ p.site }`}>
              <img className='livesiteMark' src={require('../assets/livesite.png')} alt={"Live Site"}></img>
            </a>
          </div> */}




        </div>
      ))}

    </div>
  );
}



