import React from "react";
import Style from "../style.css";

const Button = ( { children, type, color, col, onClick, className } ) => {
  return(
    <button 
      type={type} 
      className={`btn-${color} ${col} d-flex justify-content-center ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button;