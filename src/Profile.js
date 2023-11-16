import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Button from "./components/Buttons";

const Profile = () => {
  const navigate = useNavigate();
  
  const eventClick = () => {
    localStorage.removeItem("username");  
    navigate("#/Legere");
  }

  return(
    <div>
      <Navbar />
      <div className="col-6 m-auto d-flex mt-5">
        <Button 
          color="orange"
          onClick={eventClick}
        >
          Cerrar sesión
        </Button>
      </div>
    </div>
  )
}

export default Profile;