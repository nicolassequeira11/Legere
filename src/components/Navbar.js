import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Style from "../style.css";

const Navbar = () => {
  return( 
    <header>
      <nav className="navbar-container">
        <div className="navbar-container-logo">
          <Link to="/Legere" className="navbar-logo">
            <img src="/logo-white.png" className="mx-auto" alt="Logo" />
          </Link>
        </div>
        <div>
          
        </div>
        <div className="navbar-container-links">
          <Link to="/mislibros" className="navbar-link">Mis libros</Link>
          <Link to="/login" className="navbar-link">Login</Link>
          <i className="bi bi-bag navbar-cart"></i>
        </div>
      </nav>
      <div className="navbar-block"></div>
    </header>
  )
};

export default Navbar;
