import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Style from "../style.css";
import { LogoWhite } from "./Logo";

const Navbar = () => {
  const getUsername = localStorage.getItem("username");

  return( 
    <header>
      <nav className="navbar-container">

        <div className="navbar-container-logo col-2">
          <Link to="/Legere" className="navbar-logo">
            <LogoWhite className="mx-auto" />
          </Link>
        </div>

        <div className="navbar-container-search justify-content-start col-8">
          <div className="d-flex col-3 justify-content-center">
            
            {!getUsername 
            ? (<Link to="/login" className="navbar-link">Iniciar sesión</Link>)
            : (<Link to="/profile" className="navbar-link">{getUsername}</Link>)}

            {/* <i class="bi bi-chevron-down text-white my-auto"></i> */}
          </div>
          <div className="col-7 d-flex">
            <input className="navbar-inputSearch" type="search"></input>
            <i class="bi bi-search navbar-inputSearch-icon"></i>
          </div>
        </div>

        <div className="navbar-container-links col-2">

          {!getUsername ? null : <Link to="/mislibros" className="navbar-link">Mis libros</Link>}
          
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
