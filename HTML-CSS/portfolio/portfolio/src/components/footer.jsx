import React from "react";
import { FaGithub, FaEnvelope, FaInstagram, FaWhatsapp } from "react-icons/fa";

import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>contacto:</p>
      <p>
        <a
          className="link"
          href="https://github.com/tomasnieto1908"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="footer-icon" />
        </a>
      </p>
      <a className="link" href="mailto:tomasnieto249@gmail.com">
        <FaEnvelope className="footer-icon" />
      </a>

      <a
        className="link"
        href="https://www.instagram.com/ttomass9_"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram className="footer-icon instagram" />
      </a>

      <a
        className="link"
        href="https://wa.me/+5491162903400"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp className="footer-icon whatsapp" />
      </a>
    </footer>
  );
};

export default Footer;
