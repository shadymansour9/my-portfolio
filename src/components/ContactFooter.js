// src/components/ContactFooter.js
import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import profile from "../assets/shady.jpg";
import "./ContactFooter.css";

function ContactFooter() {
  return (
    <div className="footer-contact">
      <img src={profile} alt="Shady Mansour" className="footer-profile" />
      <div className="footer-icons">
        <a href="https://www.linkedin.com/in/shady-mansour-411a67230" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/shadymansour9" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a href="mailto:mansourshady69@gmail.com">
          <FaEnvelope />
        </a>
      </div>
    </div>
  );
}

export default ContactFooter;
