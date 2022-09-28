import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from '@mui/icons-material/Email';
import '../styles/socials.css'


const styles = {
  footerStyle: {
    // position: 'fixed',
    // bottom: '0px',
    // width: '100%',
    backgroundColor: 'transparent',
    // marginBottom: '1rem'
  },
  icon: {
    '& .MuiBottomNavigationAction-root': {
      color: 'red',
      width: '1px'
    },
    "& .Mui-selected,  svg": {
      color: "white",
      showLabel: 'false'

    }
  }
}





export default function Socials() {
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);

  };
  return (
    <BottomNavigation
      style={styles.footerStyle}
      // sx={{   display: 'flex', justifyContent: 'center' }}
      value={value}
      onChange={handleChange}
    >
      <BottomNavigationAction
        sx={styles.icon}
        href="https://github.com/dev-dominick"
        target="_blank"
        // label="GitHub"
        value="GitHub"
        icon={<GitHubIcon />}
      />
      <BottomNavigationAction
        sx={styles.icon}
        href="https://www.linkedin.com/in/dominick-albano/"
        target="_blank"
        // label="LinkedIn"
        value="LinkedIn"
        icon={<LinkedInIcon />}
      />
      <BottomNavigationAction
        sx={styles.icon}
        href="/contact"
        // target="_blank"
        // label="Twitter"
        value="nearby"
        icon={<EmailIcon />}
      />
    </BottomNavigation>
  );
}

