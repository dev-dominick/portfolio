import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";



const styles = {
  footerStyle: {
    position: 'fixed',
    bottom: '0px',
    width: '100vw',
    backgroundColor: 'grey',
    // color: 'white'
    // // fontSize: 'large',
    // opacity: '.5'
  }
}

export default function Footer() {
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation
      style={styles.footerStyle}
      sx={{ width: 500, color: "white" }}
      value={value}
      onChange={handleChange}
    >
      <BottomNavigationAction
        href="https://github.com/dev-dominick"
        target="_blank"
        label="GitHub"
        value="GitHub"
        icon={<GitHubIcon />}
      />
      <BottomNavigationAction
        href="https://www.linkedin.com/in/dominick-albano/"
        target="_blank"
        label="LinkedIn"
        value="favorites"
        icon={<LinkedInIcon />}
      />
      <BottomNavigationAction
        href="#comingsoon"
        target="_blank"
        label="Twitter"
        value="nearby"
        icon={<TwitterIcon />}
      />
    </BottomNavigation>
  );
}

