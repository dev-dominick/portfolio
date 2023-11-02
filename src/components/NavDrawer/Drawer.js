import { useState } from "react";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import { Link } from "react-router-dom";
import { pages } from "./helpers";

import "../../styles/ComponentStyles/drawer.css";

import "../../styles/ComponentStyles/drawer.css";

const NavDrawer = () => {
  const [state, setState] = useState({ right: false });
  const [anchorEl, setAnchorEl] = useState(false);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const handleDrawerOpen = () => {
    setAnchorEl(true);
  };

  const handleDrawerClose = () => {
    setAnchorEl(false);
  };

  const list = (anchor) => (
    <Box
      id="list box"
      sx={{
        width: 250,
        display: "flex-column",
        flexWrap: "wrap",
        alignItems: "center",
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div className="drawerheader">Navigate</div>

      <List sx={{ justifyContent: "center", marginTop: "1rem" }}>
        {pages.map(({ title, to }) => (
          <ListItem
            id="list item"
            key={title}
            disablePadding
            sx={{ border: "1px solid white", backgroundColor: "black" }}
          >
            <ListItemButton
              onClick={handleDrawerClose}
              component={Link}
              to={to}
            >
              <ListItemText
                primary={title}
                sx={{
                  textAlign: "center !important",
                  marginTop: "1rem !important",
                  marginBottom: "1rem !important",
                  fontFamily: "monospace,sans-serif !important",
                  fontSize: "2rem !important",
                  lineHeight: "1.25 !important",
                  color: "white",
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleDrawerOpen}
        onClose={handleDrawerClose}
        color="inherit"
      >
        <MenuIcon
          sx={{
            display: { md: "none" },
          }}
        />
      </IconButton>
      <Drawer
        anchor="right"
        open={anchorEl}
        onClose={handleDrawerClose}
        sx={{
          "& .MuiDrawer-paper": {
            backgroundColor: "gray !important",
          },
        }}
      >
        {list(state)}
      </Drawer>
    </div>
  );
};

export default NavDrawer;
