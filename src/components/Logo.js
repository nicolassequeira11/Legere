import React from "react";
import Style from "../style.css";
import logo from "../images/logo.png";
import logoWhite from "../images/logo-white.png";

const Logo = ( props ) => {
  return(
    <img src={logo} className={props.class} />
  )
}

const LogoWhite = ( props ) => {
  return(
    <img src={logoWhite} className={props.class} />
  )
}

export { Logo, LogoWhite };