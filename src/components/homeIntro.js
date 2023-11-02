import Socials from './socials'

import "../styles/ComponentStyles/homeintro.css";

const HomeIntro = () => {
  return (
    <div className="homeIntroContent">
      <h1 className="nameAndTitle name">Dominick Albano</h1>
      <h3 className="nameAndTitle title">Software Engineer</h3>
      <Socials />
    </div>
  );
}

export default HomeIntro