import React from "react";
import { useNavigate } from "react-router-dom";
import img404 from "./images/404.PNG";
import Button from "./components/Buttons";

const Error404 = () => {
  const navigate = useNavigate();

  const eventClick = () => {
    navigate("/");
  }

  return(
    <div className="error404-container">
      <p className="error404-title">No pudimos encontrar la página <strong>404</strong> de este libro</p>
      <div className="error404-content-container col-11">
        <div className="error404-info-container col-8">
          <p className="mx-4">Quizás estés aquí porque:</p>
          <ul className="error404-list-container mx-5">
            <li className="my-1">Un personaje se escapó de la trama y se llevó la página consigno.</li>
            <li className="my-1">Algún ávido lector tomó la página como recuerdo.</li>
            <li className="my-1">La página fue secuestrada por un supervillano.</li>
            <li className="my-1">Intentamos traducir la página al idioma pársel y fallamos.</li>
          </ul>
          <div className="col-12 mt-5 mx-5">
            <Button color="orange" col="col-4 mx-0" onClick={eventClick}>Volver al inicio</Button>
          </div>
        </div>
        <div className="error404-img-container col-4">
          <img src={img404} className="error404-img col-12" />
        </div>
      </div>
    </div>
  )
}

export default Error404;