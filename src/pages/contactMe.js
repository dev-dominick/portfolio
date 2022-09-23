import React from "react";
import ContactForm from "../components/ContactForm";
import "../styles/contactMe.css";
import Footer from "../components/footer";
import Socials from "../components/socials";


function Contact() {

  return (
    <div className="ContactPageStyles">
      <h1 className="pageHeader">Contact Me</h1>
      <h4>Dominickthedev@gmail.com</h4>
      < Socials />
      < ContactForm />
      < Footer />

    </div>
  );
}

export default Contact;



