import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
import ButtonUnstyled, { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import { styled } from '@mui/system';

import About from "../pages/aboutMe";



const color = {
  500: '#82b74b',
  600: '#c94c4c',
  700: '#4040a1',
};

const CustomButton = styled(ButtonUnstyled)`
  font-family: monospace, sans-serif;
  font-weight: bold;
  font-size: 1.5rem;
  text-decoration: none;
  // background-color: ${color[500]};
  border-radius: 8px;
  color: white;
  transition: all 150ms ease;
  cursor: pointer;
  border: none;
  height: '10%';
  text-align: center;
  padding: 1rem;
  margin: .5rem;
  white-space: nowrap;
  justifyContent: flex-end;
  // z-index: -1



  &:hover {
    // background-color: ${color[600]};
    text-decoration: underline;
  }

  &.${buttonUnstyledClasses.active} {
    // background-color: ${color[700]},
    text-decoration: underline;
  }

  &.${buttonUnstyledClasses.selected} {
    // background-color: ${color[700]},
    text-decoration: underline;
  }

  &.${buttonUnstyledClasses.focusVisible} {
    box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 5px rgba(0, 127, 255, 0.5);
    outline: none;
  }

 
`;


export default function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  // const [, setAnchorElUser] = React.useState(null);
  const [scrolled, setScrolled] = React.useState(false);
  const [clicked, setClicked] = React.useState(false);


  // React.useEffect(() => {
  //   let underline = document.getElementById('toUnderline');
  //   if () {

  //   }
  // })

  React.useEffect(() => {
    console.log(scrolled);
    if (typeof window !== "undefined") {
      window.onscroll = () => {
        let currentScrollPos = window.pageYOffset;
        // let maxScroll = document.body.scrollHeight - window.innerHeight;
        // console.log(maxScroll)
        console.log(currentScrollPos);
        if (currentScrollPos === 0) {
          setScrolled(false);

          // console.log(currentScrollPos)
        } else {
          setScrolled(true);
        }
      };
    }
  })






  return (
    // <div className="nav-container">
    <AppBar
      // className="nav-container"
      sx={{
        backgroundColor: scrolled ? "black !important" : "transparent !important"
      }} >

      <Container maxWidth="x1"
        sx={{
          display: 'flex',
          alignItems: 'center',
          display: 'flex',
          height: '5rem',
          // border: '10px solid white',


        }}>

        {/* <Toolbar 
        sx={{

          alignItems: 'center',
          display: 'flex',
          
        }}> */}

        <Typography
          variant="h5"
          noWrap
          component="a"
          href="/"
          sx={{
            // mr: 2,
            display: { xs: "flex", md: "flex" },
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "white",
            textDecoration: "none",
          }}
        >



          Dominick The Dev




        </Typography>


        <Box sx={{
          padding: 1,
          flexGrow: 1,
          display: {
            xs: "none",
            md: "flex",
            justifyContent: "flex-end"
          }
        }}>

          <CustomButton
            id='toUnderline'
            key="about"
            // onClick={() => {
            //   ('clicked')
            // }}
            component={Link}
            to="about"



          >
            About Me
          </CustomButton>

          <CustomButton
            id='toUnderline'

            key="project"
            // onClick={handleCloseNavMenu}

            component={Link}
            to="/projects"
            variant="contained"
          >
            Projects
          </CustomButton>

          <CustomButton
            id='toUnderline'

            key="contact"
            // onClick={handleCloseNavMenu}

            component={Link}
            to="/contact"
            variant="contained"
          >
            Contact Me
          </CustomButton>

        </Box>


        {/* </Toolbar> */}
      </Container>
    </AppBar>
    // </div>
  );
};
