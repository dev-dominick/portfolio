import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Container from "@mui/material/Container";
import { Link, useLocation } from "react-router-dom";
import ButtonUnstyled from "@mui/base/ButtonUnstyled";
import { styled } from "@mui/system";
import "../styles/navbar.css";

const NavButton = styled(ButtonUnstyled)({
  boxShadow: 'none',
  fontFamily: 'monospace, sans-serif',
  fontWeight: 'bold',
  // fontSize: { xs: "", sm: "", md: "'1rem'", lg: "'1.5rem'", xl: "'3rem'", },
  fontSize: '1.2rem',
  textDecoration: 'none',
  color: 'white',
  transition: 'all 150ms ease',
  cursor: 'pointer',
  padding: '.5rem 0.5rem 0.5rem 0.5rem',
  margin: '0.9rem 1.5rem 2rem 1.5rem',

  '&:hover': {
    backgroundColor: '#eeff04',
    color: 'black',
  },

  '&:active': {
    backgroundColor: '#eeff04',
    boxShadow: 'inset 0 0 13px 3px black!important',
    color: 'black',

  },

  '&:active:hover': {
    backgroundColor: '#eeff04',
    boxShadow: 'inset 0 0 13px 3px black!important',
    color: 'black',
  },
});

const FullScreenHeaderSx = {
  margin: '.9rem 1.5rem 2rem 1.5rem',
  padding: '.5rem 0.5rem 0.5rem 0.5rem',
  display: { xs: "none", sm: "none", md: "flex", lg: "flex", xl: "flex", },
  paddingLeft: { sm: "none", md: "1rem", lg: "5rem", xl: "8rem" },
  fontFamily: "monospace",
  fontSize: '2rem',
  fontWeight: 700,
  letterSpacing: ".3rem",
  color: "white",
  textDecoration: 'none',
  // flexFlow: { xs: "", sm: "", md: "row nowrap", lg: "row nowrap", xl: "row nowrap", },
  // alignItems: { xs: "", sm: "", md: "center", lg: "center", xl: "center", },
  // height: { xs: "", sm: "", md: "5rem", lg: "5rem", xl: "5rem", },
  // justifyContent: { xs: "", sm: "", md: "flex-end", lg: "flex-end", xl: "flex-end", },
  '&:hover': {
    textDecoration: 'underline',
    textDecorationColor: '#eeff04'
  }
};

export default function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const location = useLocation();
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  React.useEffect(() => {
    let page = location.pathname;
    console.log(page);
    let pageName = "https://dominickthedev.com" + page;
    const id = document.getElementsByClassName("toUnderline");
    console.log(id);
    for (let i = 0; i < id.length; i++) {
      if (pageName === id[i].href) {

        id[i].style.boxShadow = '0 0 0 0.2rem rgba(238,255,4)';

        // id[i].style.textDecoration = "underline";
        // id[i].style.textDecorationColor = "#eeff04";
      } else {

        id[i].style.boxShadow = '0 0 0 0 transparent';

        // id[i].style.textDecoration = "underline";
        // id[i].style.textDecorationColor = "transparent";

      }
    }
  });

  React.useEffect(() => {
    console.log(scrolled);
    if (typeof window !== "undefined") {
      window.onscroll = () => {
        let currentScrollPos = window.pageYOffset;
        console.log(currentScrollPos);
        if (currentScrollPos === 0) {
          setScrolled(false);
        } else {
          setScrolled(true);
        }
      };
    }
  });

  return (
    <AppBar
      sx={{
        backgroundColor: scrolled
          ? "#242424 !important"
          : "transparent !important",
        boxShadow: scrolled ? "black !important" : "none !important",
      }}
    >
      <Container
        maxWidth="x1"
        sx={{
          padding: "1rem",
          // display: { xs: "", sm: "", md: "flex", lg: "flex", xl: "flex", },
          // alignContent: { xs: "", sm: "", md: "center", lg: "center", xl: "center", },
          // alignItems: { xs: "", sm: "", md: "center", lg: "center", xl: "center", },
          // flexFlow: { xs: "", sm: "", md: "row nowrap", lg: "row nowrap", xl: "row nowrap", },
          // height: { xs: "", sm: "", md: "5rem", lg: "5rem", xl: "5rem", },
          // justifyContent: { xs: "", sm: "", md: "center", lg: "center", xl: "center", },

        }}
      >
        <Toolbar
          // disableGutters
          sx={{
            display: { xs: "flex", sm: "flex", md: "flex", lg: "flex", xl: "flex" },
            flexDirection: { xs: "row-reverse", sm: "row-reverse", md: "row", lg: "row", xl: "row" },
          }} >

          {/* Menu Icon for mobile */}
          <Box sx={{
            flexGrow: 1,
            display: { xs: "flex", sm: "flex", md: "none" },
            flexDirection: { xs: 'row-reverse', sm: 'row-reverse' }
          }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
            //   sx={{display: 'flex',
            // }}
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}

            >

              {/* mobile page menu buttons */}
              <MenuItem
                sx={{
                  font: 'monospace',
                  backgroundColor: "black",
                  color: "white",
                  textAlign: 'center !important'

                }}
                key="about"
                onClick={handleCloseNavMenu}
                component={Link}
                to="/about"
              >
                <Typography textAlign="center">About</Typography>
              </MenuItem>
              <MenuItem
                sx={{
                  font: 'monospace',
                  backgroundColor: "black",
                  color: "white",
                  textAlign: 'center !important'

                }}
                key="projects"
                onClick={handleCloseNavMenu}
                component={Link}
                to="/projects"
              >
                <Typography textAlign="center">Projects</Typography>
              </MenuItem>
              <MenuItem
                sx={{
                  font: 'monospace',
                  backgroundColor: "black",
                  color: "white",
                  textAlign: 'center !important'

                }}
                key="contact"
                onClick={handleCloseNavMenu}
                component={Link}
                to="/contact"
              >
                <Typography textAlign="center">Contact</Typography>
              </MenuItem>

            </Menu>
          </Box>

          {/* header for full screen: Dominick The Dev */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={FullScreenHeaderSx}
          >
            Dominick The Dev
          </Typography>

          {/* mobile header: Dev Dominick */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 5,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Dev Dominick
          </Typography>

          {/* buttons for full screen */}
          <Box
            sx={{
              padding: 1,
              flexGrow: 1,
              display: { xs: "none", sm: "none", md: "flex", lg: "flex", xl: "flex", },
              paddingRight: { sm: "none", md: "1rem", lg: "5rem", xl: "8rem" },
              // flexFlow: { xs: "", sm: "", md: "row nowrap", lg: "row nowrap", xl: "row nowrap", },
              // alignItems: { xs: "", sm: "", md: "center", lg: "center", xl: "center", },
              // height: { xs: "", sm: "", md: "5rem", lg: "5rem", xl: "5rem", },
              justifyContent: { xs: "", sm: "", md: "flex-end", lg: "flex-end", xl: "flex-end", },
            }}
          >

            {/* About Me Button */}
            <NavButton
              className="toUnderline"
              key="about"
              component={Link}
              to="about"
            >
              About Me
            </NavButton>

            {/* Projects Button */}
            <NavButton
              className="toUnderline"
              key="project"
              component={Link}
              to="/projects"
              variant="contained"
            >
              Projects
            </NavButton>

            {/* Contact Me Button */}
            <NavButton
              className="toUnderline"
              key="contact"
              component={Link}
              to="/contact"
              variant="contained"
            >
              Contact Me
            </NavButton>

          </Box>

        </Toolbar>

      </Container>

    </AppBar>
  );
}
