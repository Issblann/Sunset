import React from "react";
import githubIcon from "../../images/footer/github-icon.svg";
import linkedinIcon from "../../images/footer/linkedin-icon.svg";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div>© 2023 Sunset Page.</div>
      <div className="tag">Made with love by Ana Perez 💗 </div>
      <div className="social-links">
        <Link to="https://github.com/Issblann">
          <img src={githubIcon} alt="githubIcon" />
        </Link>
        <Link to="https://www.linkedin.com/in/anaperafan-dev/">
          <img src={linkedinIcon} alt="linkedinIcon" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
