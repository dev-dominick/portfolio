import { useEffect, useState } from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

import { Link, useLocation } from "react-router-dom";

import NavDrawer from "../NavDrawer/Drawer";

import { buttonObj, FullScreenHeaderSx, navButtonStyles } from "./helpers";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.onscroll = () => {
        let currentScrollPos = window.scrollY;
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
      <Container maxWidth="x1" sx={{ padding: "1rem" }}>
        <Toolbar
          // disableGutters
          sx={{
            display: "flex",
            flexDirection: { xs: "row-reverse", md: "row" },
          }}
        >
          {/* Menu Icon for mobile */}
          <NavDrawer />

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
              mr: 1,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".01rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Dev Dominick
          </Typography>

          {/* buttons for full screen */}
          <Box
            sx={{
              height: '100%',
              padding: 1,
              flexGrow: 1,
              display: {
                xs: "none",
                md: "flex",

              },
              paddingRight: { sm: "none", md: "0rem", lg: "5rem", xl: "8rem" },
              justifyContent: {md: "flex-end",},
              gap: '1.5rem'
            }}
          >
            {buttonObj.map((button) => {
              return (
                <Button
                  className="toUnderline"
                  key={button.pageName}
                  component={Link}
                  to={`/${button.pageName}`}
                  variant="outlined"
                  sx={navButtonStyles}
                >
                  {button.buttonText}
                </Button>
              );
            })}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
