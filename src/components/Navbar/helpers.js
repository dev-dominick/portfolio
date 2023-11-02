export const buttonObj = [
  {
    pageName: 'about',
    buttonText: 'About Me',
  },
  {
    pageName: 'projects',
    buttonText: 'Projects',
  },
  {
    pageName: 'contact',
    buttonText: 'Contact Me',
  },
]

export const FullScreenHeaderSx = {
  margin: '.9rem 1.5rem 2rem 1.5rem',
  padding: '.5rem 0.5rem 0.5rem 0.5rem',
  display: { xs: "none", sm: "none", md: "flex", lg: "flex", xl: "flex", },
  paddingLeft: { sm: "none", md: "0rem", lg: "5rem", xl: "8rem" },
  fontFamily: "monospace",
  fontSize: '2rem',
  fontWeight: 700,
  letterSpacing: ".3rem",
  color: "white",
  textDecoration: 'none',

  '&:hover': {
    textDecoration: 'underline',
    textDecorationColor: '#eeff04'
  }
};

export const navButtonStyles = {
  padding: {
    xs: "none",
    md: "0.5rem",
  },
  // margin: {
  //   xs: "none",
  //   md: "0.9rem 0.5rem 2rem 0.5rem",
  //   lg: "0.9rem 1.5rem 2rem 1.5rem",
  // },
  color: "white",
  border: "1px solid white",
  "&:hover": {
    borderColor: "#eeff04",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "black",
    borderColor: "#eeff04",
  },
};



// ({
//   boxShadow: 'none',
//   fontFamily: 'monospace, sans-serif',
//   fontWeight: 'bold',
//   // fontSize: { xs: "", sm: "", md: "'1rem'", lg: "'1.5rem'", xl: "'3rem'", },
//   fontSize: '1.2rem',
//   textDecoration: 'none',
//   color: 'white',
//   transition: 'all 150ms ease',
//   cursor: 'pointer',
//   padding: ".5rem 0.5rem 0.5rem 0.5rem",
//   margin: '0.9rem 1.5rem 2rem 1.5rem',

//   '&:hover': {
//     backgroundColor: '#eeff04',
//     color: 'black',
//   },

//   '&:active': {
//     backgroundColor: '#eeff04',
//     boxShadow: 'inset 0 0 13px 3px black!important',
//     color: 'black',

//   },

//   '&:active:hover': {
//     backgroundColor: '#eeff04',
//     boxShadow: 'inset 0 0 13px 3px black!important',
//     color: 'black',
//   },
// });