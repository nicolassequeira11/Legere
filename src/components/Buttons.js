import React from "react";
import Style from "../style.css";

const Button = ( { children, color } ) => {
  return(
    <button 
      type="sumbit" 
      className={`btn-${color} col-9`}>
      {children}
    </button>
  )
}

export default Button;