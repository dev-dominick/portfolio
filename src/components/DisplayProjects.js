import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import { purple } from "@mui/material/colors";



const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};



const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[500],
  "&:hover": {
    backgroundColor: purple[700],
  },
}));

export default function DisplayProjects() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  let projects = [
    {
      title: 'Daily Meal Planner',
      languages: 'HTML/CSS/JS',
      background: '../../public/assets/planner.png'
    },
    {
      title: 'Notepad',
      languages: 'HTML/CSS/JS',
      background: 'dksafjkasjd;fl',
    },
    {
      title: 'Daily Meal Planner',
      languages: 'HTML/CSS/JS',
      background: '../../public/assets/planner.png'
    },
    {
      title: 'Daily Meal Planner',
      languages: 'HTML/CSS/JS',
      background: '../../public/assets/planner.png'
    },
    {
      title: 'Daily Meal Planner',
      languages: 'HTML/CSS/JS',
      background: '../../public/assets/planner.png'
    },
    {
      title: 'Daily Meal Planner',
      languages: 'HTML/CSS/JS',
      background: '../../public/assets/planner.png'
    },
    {
      title: 'Daily Meal Planner',
      languages: 'HTML/CSS/JS',
      background: '../../public/assets/planner.png'
    },

  ]

  return (

    <div class="section-area">

      {projects.map(({ title, languages, background }) => (

        <div class="box-item" >

          <div className="project-name-text" onClick={handleOpen}>
            <div>
              {title}
            </div>

            <div>
              {languages}
            </div>
          </div>



          {/* <div>
              {background}
            </div> */}






        </div>

      ))}








      {/* <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography
              id="transition-modal-title"
              variant="h6"
              component="h2"
              sx={{
                textAlign: "center",
                fontSize: "24px",
                paddingBottom: "3rem",
              }}
            >
              Daily Meal Planner
            </Typography>

            <Stack spacing={2} direction="row">
              <ColorButton variant="contained">Custom CSS</ColorButton>
              <ColorButton variant="contained">Custom CSS</ColorButton>
            </Stack>

            <Typography
              id="transition-modal-description"
              sx={{ mt: 2, color: "black" }}
            >
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Box>
        </Fade>
      </Modal> */}
    </div>
  );
}




