import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Style from "../style.css";
import { LogoWhite } from "./Logo";

const Navbar = () => {
  return( 
    <header>
      <nav className="navbar-container">

        <div className="navbar-container-logo col-3">
          <Link to="/Legere" className="navbar-logo">
            <LogoWhite class="mx-auto" />
          </Link>
        </div>

        <div className="navbar-container-search col-6">
          <div className="d-flex col-2">
            <Link to="/login" className="navbar-link">Login</Link>
            <i class="bi bi-chevron-down text-white my-auto"></i>
          </div>
          <input className="form-control navbar-inputSearch" type="search"></input>
        </div>

        <div className="navbar-container-links col-3">
          <Link to="/mislibros" className="navbar-link">Mis libros</Link>
          
          <i className="bi bi-bag navbar-cart"></i>
        </div>

      </nav>
      <div className="navbar-block">
        <div className="ms-5 py-2">
          <Link className="navbar-sublink">
            Géneros
            <i class="bi bi-chevron-down text-white ms-2 my-auto"></i>
          </Link>
          <Link className="navbar-sublink">Ofertas</Link>
          <Link className="navbar-sublink">Los más vendidos</Link>
          <Link className="navbar-sublink">LeReads</Link>
        </div>
      </div>
    </header>
  )
};

export default Navbar;
