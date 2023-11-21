import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { LogoWhite } from "./Logo";

const Navbar = () => {
  const getUsername = localStorage.getItem("username");
  const navigate = useNavigate();
  const [showGenres, setShowGenres] = useState(false);
  const [showNavMobile, setShowNavMobile] = useState(false);
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

  // Toggle para menu Generos
  const toggleGenres = () =>{
    setShowGenres(!showGenres);
  }

  // Toggle para menu Mobile
  const toggleNav = () =>{
    setShowNavMobile(!showNavMobile);
  }

  // Recargar la pagina
  const reload = () => {
    window.location.reload();
  }

  // Evento click de los generos
  const eventClick = (genre) => {
    localStorage.setItem("genre", genre);
    navigate("/Genre");
    reload();
  }

  return( 
    <header>

      {anchoPantalla > 1100 ? (
        // Version Desktop (ancho > 1100)
        <nav className="navbar-container">
          <div className="navbar-container-logo col-2">
            <Link to="/" className="navbar-logo">
              <LogoWhite className="mx-auto" />
            </Link>
          </div>
        
          <div className="navbar-container-search justify-content-start col-8">
            <div className="d-flex col-3 justify-content-center">
                
              {!getUsername 
              ? (<Link to="/login" className="navbar-link">Iniciar sesión</Link>)
              : (<Link to="/profile" className="navbar-link">{getUsername}</Link>)}

            </div>
            <div className="col-7 d-flex">
              <input className="navbar-inputSearch" placeholder="Buscar en Legere" type="search"></input>
              <i className="bi bi-search navbar-inputSearch-icon"></i>
            </div>
          </div>

          <div className="navbar-container-links col-2">

            {!getUsername ? null : <Link to="/mislibros" className="navbar-link">Mis libros</Link>}
              
            <i className="bi bi-bag navbar-cart"></i>
          </div>

        </nav>
        ) : (
        
        // Version Mobile (ancho < 1100)
        <nav className="navbar-container h-100 flex-wrap">
          <div className="navbar-container-logo col-12">

            {/* Logo */}
            <Link to="/" className="navbar-logo col-6 col-sm-3">
              <LogoWhite className="mx-auto col-12" />
            </Link>

            {/* Iconos */}
            <div className="col-6 col-sm-9 m-auto d-flex">
              <i // Carrito
                className="bi bi-bag navbar-cart display-4 w-100 justify-content-end me-3 d-flex"
              ></i>
              <i // Menu Ham
                className="bi bi-list display-1 text-white d-flex justify-content-end" 
                onClick={toggleNav} 
              ></i> 
            </div>

          </div>
          
          <div className="navbar-container-search mb-3 mt-2 col-12">
            <div className="d-flex col-6 col-sm-4 justify-content-center">

              {!getUsername 
              ? (<Link to="/login" className="navbar-link">Iniciar sesión</Link>)
              : (<Link to="/profile" className="navbar-link">{getUsername}</Link>)}

            </div>
            <div className="col-7 d-flex">
              {/* Input Search */}
              <input 
                className="navbar-inputSearch" 
                type="search"
              ></input>
              <i className="bi bi-search navbar-inputSearch-icon"></i>
            </div>
          </div>

          {showNavMobile && (
          <div className="col-12">
            <div className="navbar-mobile-menu col-12">
              {!getUsername 
                ? null 
                : <Link 
                    to="/mislibros" 
                    className="navbar-mobile-sublink">
                  Mis libros
                  </Link>
              }
              <Link className="navbar-mobile-sublink" onClick={toggleGenres}>
                Géneros
                <i className="bi bi-chevron-down text-white ms-2 my-auto"></i>
              </Link>

              {showGenres && (
                <div className="navbar-mobile-genresMenu">
                  <p 
                    className="" 
                    onClick={()=> eventClick("Romance")}>
                  Romance
                  </p>
                  <p 
                    className="" 
                    onClick={()=> eventClick("Terror")}>
                  Terror
                  </p>
                  <p 
                    className="" 
                    onClick={()=> eventClick("Ciencia")}>
                  Ciencia
                  </p>
                  <p 
                    className="" 
                    onClick={()=> eventClick("Fantasía")}>
                  Fantasía
                  </p>
                  <p 
                    className="" 
                    onClick={()=> eventClick("Autoayuda")}>
                  Autoayuda
                  </p>
                  <p 
                    className="" 
                    onClick={()=> eventClick("Poesía")}>
                  Poesía
                  </p>
                  <p 
                    className="" 
                    onClick={()=> eventClick("Cocina y recetas")}>
                  Cocina y recetas
                  </p>
                </div>
              )}

              <Link className="navbar-mobile-sublink">Ofertas</Link>
              <Link className="navbar-mobile-sublink">Los más vendidos</Link>
              <Link className="navbar-mobile-sublink">LeReads</Link>
            </div>
          </div>
          )}
          
        </nav>

        )}
      
      {/* Submenú Versión Desktop */}
      <div className="navbar-block d-none d-md-block">
        <div className="ms-5 py-2">

          <Link className="navbar-sublink" onClick={toggleGenres}>
            Géneros
            <i class="fa-solid fa-chevron-down text-white ms-1"></i>
          </Link>

          {showGenres && (
            <div className="navbar-listGenre">
              <p 
                className="navbar-listGenre-item" 
                onClick={()=> eventClick("Romance")}>
              Romance
              </p>
              <p 
                className="navbar-listGenre-item" 
                onClick={()=> eventClick("Terror")}>
              Terror
              </p>
              <p 
                className="navbar-listGenre-item" 
                onClick={()=> eventClick("Ciencia")}>
              Ciencia
              </p>
              <p 
                className="navbar-listGenre-item" 
                onClick={()=> eventClick("Fantasía")}>
              Fantasía
              </p>
              <p 
                className="navbar-listGenre-item" 
                onClick={()=> eventClick("Autoayuda")}>
              Autoayuda
              </p>
              <p 
                className="navbar-listGenre-item" 
                onClick={()=> eventClick("Poesía")}>
              Poesía
              </p>
              <p 
                className="navbar-listGenre-item" 
                onClick={()=> eventClick("Cocina y recetas")}>
              Cocina y recetas
              </p>
            </div>
          )}

          <Link className="navbar-sublink">Ofertas</Link>
          <Link className="navbar-sublink">Los más vendidos</Link>
          <Link className="navbar-sublink">LeReads</Link>
        </div>
      </div>
    </header>
  )
};

export default Navbar;
