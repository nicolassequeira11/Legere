import React from "react";
import Style from "../style.css";

const Button = ( { children, type, color, col, onClick } ) => {
  return(
    <button 
      type={type} 
      className={`btn-${color} ${col} d-flex justify-content-center`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button;