import React from "react";
import ContactForm from "../components/ContactForm";
import "../styles/contactMe.css";
import Footer from "../components/footer";
import Socials from "../components/socials";
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function Contact() {

  return (
    <div className="ContactPageStyles">
      <h1 className="pageHeader">Contact Me</h1>

      <div className="contactInfo">

        <div className="contactInfoBox">
          < EmailIcon />
          <h5 className="contactInfoText">Email Me!</h5>
          <h6 className="contactInfoText">Dominickthedev@gmail.com</h6>
        </div>

        <div className="contactInfoBox">
          < LocationOnIcon />
          <h5 className="contactInfoText">Located in</h5>
          <h6 className="contactInfoText">Greater Philadelphia Area</h6>
        </div>

      </div>

      < Socials />
      < ContactForm />
      < Footer />

    </div>
  );
}

export default Contact;



