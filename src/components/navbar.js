import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
// import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
// import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
// import AdbIcon from "@mui/icons-material/Adb";
import { Link } from "react-router-dom";
import "../styles/navbar.css";


// const settings = ["Profile", "Account", "Dashboard", "Logout"];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  // const [, setAnchorElUser] = React.useState(null);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    console.log(scrolled);
    if (typeof window !== "undefined") {
      window.onscroll = () => {
        let currentScrollPos = window.pageYOffset;
        // let maxScroll = document.body.scrollHeight - window.innerHeight;
        // console.log(maxScroll)
        console.log(currentScrollPos);
        if (currentScrollPos === 0 ) {
          setScrolled(false);

          // console.log(currentScrollPos)
        } else {
          setScrolled(true);
        }
      };
    }
  })

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  // const handleOpenUserMenu = (event) => {
  //   setAnchorElUser(event.currentTarget);
  // };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null);
  // };




  return (
    <AppBar sx={{ 
      backgroundColor: scrolled ? "transparent !important" : "grey !important" 

     }} position="sticky">
      <Container maxWidth="x1">
        <Toolbar >
          {/* <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} /> */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "white",
              textDecoration: "none",
            }}
          >
            Dominick Albano
          </Typography>

          {/* <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              border-radius="10px"
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
              <MenuItem
                key="about"
                onClick={handleCloseNavMenu}
                component={Link}
                to="/about"
              >
                <Typography textAlign="center">About</Typography>
              </MenuItem>
              <MenuItem
                key="projects"
                onClick={handleCloseNavMenu}
                component={Link}
                to="/projects"
              >
                <Typography textAlign="center">Projects</Typography>
              </MenuItem>
              <MenuItem
                key="contact"
                onClick={handleCloseNavMenu}
                component={Link}
                to="/contact"
              >
                <Typography textAlign="center">Contact</Typography>
              </MenuItem>
              <MenuItem
                key="resume"
                onClick={handleCloseNavMenu}
                component={Link}
                to="/resume"
              >
                <Typography textAlign="center">Resume</Typography>
              </MenuItem>
            </Menu>
          </Box>  */}

          {/* <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 5,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: "300000rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Devel Dominick
          </Typography> */}



          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex", justifyContent: "flex-end" } }}>

            {/* about me button */}
            <Button
              key="about"
              onClick={handleCloseNavMenu}
              sx={{
                borderRadius: 8,
                mr: 5,
                my: 5,
                pr: 2,
                pl: 2,
                py: 2,
                color: "white",
                display: "block",
                // marginLeft: 20,
                backgroundColor: "black"
              }}
              component={Link}
              to="/about"
              variant="text"
              // color="primary"
            >
              About Me
            </Button>

            {/* Projects button */}
            <Button
              key="project"
              onClick={handleCloseNavMenu}
              sx={{
                mr: 5,
                my: 5,
                color: "white",
                display: "block",
                backgroundColor: "black"
              }}
              component={Link}
              to="/projects"
              variant="contained"
              color="primary"
            >
              Projects
            </Button>

            {/* Contacts Button */}
            <Button
              key="contact"
              onClick={handleCloseNavMenu}
              sx={{
                mr: 5,
                my: 5,
                color: "white",
                display: "block",
                backgroundColor: "black"

              }}
              component={Link}
              to="/contact"
              variant="contained"
              color="primary"
            >
              Contact me
            </Button>

          </Box>

         
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
