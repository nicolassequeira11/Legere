import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Button from "./components/Buttons";
import Footer from "./components/Footer";
import TextInput from "./components/TextInput";

const Profile = () => {
  const navigate = useNavigate();
  const username = localStorage.getItem("username");
  const email = localStorage.getItem("email");

  const [user, setUser] = useState(username);
  const [correo, setCorreo] = useState(email);
  const [showProfile, setShowProfile] = useState(false);
  const [anchoPantalla, setAnchoPantalla] = useState(window.innerWidth);

  useEffect(() => {
    // Función para actualizar el estado del ancho de la pantalla cuando cambie el tamaño de la ventana
    const actualizarAnchoVentana = () => {
      setAnchoPantalla(window.innerWidth);
    };

    // Agregar un listener de evento para manejar cambios en el tamaño de la ventana
    window.addEventListener("resize", actualizarAnchoVentana);

    // Remover el listener cuando el componente se desmonta
    return () => {
      window.removeEventListener("resize", actualizarAnchoVentana);
    };
  }, []);
  
  const eventClick = () => {
    localStorage.removeItem("username");  
    navigate("/");
  }

  const eventSave = () => {
    localStorage.setItem("username", user);
    localStorage.setItem("email", correo);
    window.location.reload()
  }

  const handleUsernameChange = (event) => {
    setUser(event.target.value);
  }

  const handleEmailChange = (event) => {
    setCorreo(event.target.value);
  }

  const toggleProfile = () =>{
    setShowProfile(!showProfile);
  }

  return(
    <div>
      <Navbar />
      <div className="d-flex flex-column flex-sm-row">

        {anchoPantalla > 700 ? (
        <div className="profile-info-container col-sm-4 col-md-3 col-lg-4 col-xl-3">
          <div className="profile-user-container">
            <i className="fa-solid fa-circle-user fa-2xl profile-user-icon"></i>
            <p className="profile-user">{username}</p>
          </div>
          <div>
            <div className="profile-links-container">
              <i className="fa-solid fa-key profile-links-icon"></i>
              <p className="profile-links">Mi cuenta</p>
            </div>
            <div className="profile-links-container">
              <i className="fa-solid fa-lock profile-links-icon"></i>
              <p className="profile-links">Seguridad</p>
            </div>
            <div className="profile-links-container">
              <i className="fa-solid fa-credit-card profile-links-icon"></i>
              <p className="profile-links">Medios de pago</p>
            </div>
            <div className="profile-links-container">
              <i className="fa-solid fa-bell profile-links-icon"></i>
              <p className="profile-links">Notificaciones</p>
            </div>
            <div className="profile-links-container">
              <i className="fa-solid fa-bag-shopping profile-links-icon"></i>
              <p className="profile-links">Mis compras</p>
            </div>
            <div className="profile-links-container">
              <i className="fa-solid fa-heart profile-links-icon"></i>
              <p className="profile-links">Favoritos</p>
            </div>
            <div className="profile-links-container">
              <i className="fa-solid fa-book profile-links-icon"></i>
              <p className="profile-links">Libros vendidos</p>
            </div>
            <div className="profile-links-container">
              <i className="fa-solid fa-circle-question profile-links-icon"></i>
              <p className="profile-links">Centro de soporte</p>
            </div>
            <div className="profile-links-container">
              <i className="fa-solid fa-money-check-dollar profile-links-icon"></i>
              <p className="profile-links">Suscripción</p>
            </div>
          </div>
        </div>
        ) : (
          <div>
            <div className="profile-ham-mobile" onClick={toggleProfile}>
              <i className="bi bi-list fa-2xl"></i>
            </div>
            {showProfile && (
            <div className="profile-info-container-mobile">
              <div>
                <div className="profile-links-container">
                  <i className="fa-solid fa-key profile-links-icon"></i>
                  <p className="profile-links">Mi cuenta</p>
                </div>
                <div className="profile-links-container">
                  <i className="fa-solid fa-lock profile-links-icon"></i>
                  <p className="profile-links">Seguridad</p>
                </div>
                <div className="profile-links-container">
                  <i className="fa-solid fa-credit-card profile-links-icon"></i>
                  <p className="profile-links">Medios de pago</p>
                </div>
                <div className="profile-links-container">
                  <i className="fa-solid fa-bell profile-links-icon"></i>
                  <p className="profile-links">Notificaciones</p>
                </div>
                <div className="profile-links-container">
                  <i className="fa-solid fa-bag-shopping profile-links-icon"></i>
                  <p className="profile-links">Mis compras</p>
                </div>
                <div className="profile-links-container">
                  <i className="fa-solid fa-heart profile-links-icon"></i>
                  <p className="profile-links">Favoritos</p>
                </div>
                <div className="profile-links-container">
                  <i className="fa-solid fa-book profile-links-icon"></i>
                  <p className="profile-links">Libros vendidos</p>
                </div>
                <div className="profile-links-container">
                  <i className="fa-solid fa-circle-question profile-links-icon"></i>
                  <p className="profile-links">Centro de soporte</p>
                </div>
                <div className="profile-links-container">
                  <i className="fa-solid fa-money-check-dollar profile-links-icon"></i>
                  <p className="profile-links">Suscripción</p>
                </div>
              </div>
            </div> )}
          </div>)}

        <div className="justify-content-center d-flex flex-column pt-4 pb-3 py-md-0 col-sm-8 col-md-9 col-lg-8 col-xl-9">
          <div className="profile-profileField-container col-11">
            <h4 className="text-center">Mi cuenta</h4>
            <div className="profile-inputs-container col-12 col-md-6">
              <input 
                onChange={handleUsernameChange}
                type="text" 
                className="form-control form-control-lg profile-input" 
                placeholder={username}
              />
              <input 
                onChange={handleEmailChange}
                type="email" 
                className="form-control form-control-lg profile-input" 
                placeholder={email}
              />
            </div>
            <div className="profile-button-container d-block d-lg-flex col-md-6">
              <Button 
                color="violet"
                onClick={eventSave}
                col="col-12 col-lg-5"
                className="my-3"
              >
                Guardar cambios
              </Button>
              <Button 
                color="orange"
                onClick={eventClick}
                col="col-12 col-lg-5"
                className="my-3"
              >
                Cerrar sesión
              </Button>
            </div>  
          </div>
        </div>   

      </div>
      <Footer />
    </div>
  )
}

export default Profile;