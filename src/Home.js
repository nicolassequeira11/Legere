import React, { useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Banner from "./images/banner-home.jpg";
import BannerMobile from "./images/banner-home-mobile.jpg";
import Card from "./components/Card";
import Title from "./components/Title";
import Footer from "./components/Footer";

const Home = () => {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();
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

  const clickDetails = (id) => {
    localStorage.setItem("bookID", id);
    navigate("/Details");
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const search = "react";
        const key = "AIzaSyA_18O1wr5f_4V5Ae5451n9wU5oS_8wslI";
        const maxResults = "maxResults=9";

        const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=` + search + `&` + maxResults + `&key=` + key);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();

        setBooks(result.items);

      } catch (error) {
      } finally {
      }
    };

    fetchData();
  }, []);

  return(
    <div>
      <Navbar />
      <div>
        {anchoPantalla > 700
        ? (<img src={Banner} className="show col-12 object-fit-contain" />) 
        : (<img src={BannerMobile} className="show col-12 object-fit-cover" />)
        }
      </div>
      <Title title="Libros populares" />
      <div className="flex-wrap d-flex col-11 m-auto show">
        {books.map(book => {
          let thumbnail = book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail;
          let amount = book.saleInfo.listPrice && book.saleInfo.listPrice.amount;
          if(thumbnail!=undefined && amount!=undefined)
          {
            return(
              <Card 
                key={book.id} 
                book={book} 
                img={book.volumeInfo.imageLinks.thumbnail}
                title={book.volumeInfo.title} 
                author={book.volumeInfo.authors}
                price={book.saleInfo.listPrice.amount + " " + book.saleInfo.listPrice.currencyCode}
                onClick={()=> clickDetails(book.id)} 
              />
            )
          }
        })}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
