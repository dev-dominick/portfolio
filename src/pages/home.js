import HomeIntro from "../components/homeIntro";
import ParticlesContainer from "../components/Particles";

import "../styles/AppStyles/App.css";
import "../styles/PageStyles/homePage.css";

const Home = () => {
  return (
    <div className="layout">
      {/* <ParticlesContainer /> */}
      <div className="homeIntroContainer">
        <HomeIntro />
      </div>
    </div>
  );
};

export default Home;
