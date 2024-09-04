import React from "react";
import { FaGithub, FaEnvelope, FaInstagram } from "react-icons/fa";
function Footer() {
  return (
    <footer className="blog-footer">
      <p className="blog-footer__text">&copy; 2024 Tomas Nieto Rossi</p>
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
    </footer>
  );
}

export default Footer;