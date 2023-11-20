import React from "react";
import { LogoWhite } from "./Logo";

const Footer = () => {
  return(
    <footer className="footer-container">
      <div className="col-12 col-md-8 m-auto justify-content-center d-flex">
        <LogoWhite className="col-4 col-xl-2 mt-4" />
      </div>
      <div className="footer-links-container flex-column flex-md-row">
        <a href="#" className="footer-links">Sobre nosotros</a>
        <a href="#" className="footer-links">Privacidad</a>
        <a href="#" className="footer-links">Términos de uso</a>
        <a href="#" className="footer-links">Empleo</a>
      </div>
    </footer>
  )
}

export default Footer;