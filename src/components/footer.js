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
    width: '100%',
    backgroundColor: 'transparent',
    marginBottom: '1rem'
  },
  // bgcolor: 'transparent',
  //   '& .Mui-selected': {
  //     '& .MuiBottomNavigationAction-label': {
  //       color: 'red'
  //     },
  //     '& .MuiSvgIcon-root, & .MuiBottomNavigationAction-label': {
  //       color: 'green'
  //     }
  //   }

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
        sx={{ 
          bgcolor: 'yellow',
          color: 'red',
          '.mui-selected': 'green !important',
          
             }}  
        href="https://github.com/dev-dominick"
        target="_blank"
        label="GitHub"
        value="GitHub"
        icon={<GitHubIcon />}
      />
      {/* <BottomNavigationAction
        sx={styles.iconStyle}
        href="https://www.linkedin.com/in/dominick-albano/"
        target="_blank"
        label="LinkedIn"
        value="LinkedIn"
        icon={<LinkedInIcon />}
      />
      <BottomNavigationAction
        sx={styles.iconStyle}
        href="#comingsoon"
        target="_blank"
        label="Twitter"
        value="nearby"
        icon={<TwitterIcon />}
      /> */}
    </BottomNavigation>
  );
}

