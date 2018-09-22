import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div id="footer">
      <a href="https://github.com/queenofdexterity/job_site" target="_blank">
        <FaGithub className="icon" />
      </a>
      &nbsp; &nbsp; &nbsp; &nbsp;
      <a href="https://www.linkedin.com/in/areejhassan" target="_blank">
        <FaLinkedin className="icon" />
      </a>
    </div>
  );
};

export default Footer;
