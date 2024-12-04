import React from "react";
const Footer = () => {
  return (
    <footer className="Footer">
      <p className="Footer-text">
        Developed by <span className="name"> ONKAR JAMMA </span>
      </p>
      <div className="Footer-links">
        <a
          href="https://www.linkedin.com/in/onkar-jamma-616010258/"
          target="_blank"
          rel="noopener noreferrer"
          className="Footer-link"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/ONKARJAMMA"
          target="_blank"
          rel="noopener noreferrer"
          className="Footer-link"
        >
          GitHub
        </a>
      </div>
    </footer>
  );
};

export default Footer;
