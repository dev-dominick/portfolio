import "../../styles/ComponentStyles/footer.css";

const Footer = () => {

  const currentYear = new Date().getFullYear();

  return (
    <div className="footerContainer">
      <p className="footer">Dominick Albano © {currentYear}</p>
    </div>
  );
};

export default Footer;
