import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Button from "./components/Buttons";
import Footer from "./components/Footer";

const Details = () => {
  const [book, setBook] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const bookID = localStorage.getItem("bookID");
        const id = bookID;

        const response = await fetch(`https://www.googleapis.com/books/v1/volumes/`+ id);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setBook(result);

      } catch (error) {
      } finally {
      }
    };

    fetchData();
  }, []);

  return(
    <div>
      <Navbar />
      {book.volumeInfo && book.volumeInfo.title ? (
        <div className="d-flex flex-column-reverse flex-md-row justify-content-around container-lg my-5">
          <div className="col-12 col-md-6 col-lg-8 pe-md-5 mt-5 mt-md-0 py-2">
            <h5 className="details-subtitle">¡Esta podría ser tu próxima lectura!</h5>
            <h1>{book.volumeInfo.title}</h1>
            <p className="text-muted">{book.volumeInfo.authors}</p>
            <div className="details-info-container">
              <p 
                className="details-info-item">
                  Número de páginas: {book.volumeInfo.pageCount}
              </p>
              <p 
                className="details-info-item">
                  Idioma: {book.volumeInfo.language}
              </p>
              <p 
                className="details-info-item">
                  Editorial: {book.volumeInfo.publisher}
              </p>
              {book.volumeInfo.industryIdentifiers && book.volumeInfo.industryIdentifiers[1] && (
                <p 
                  className="details-info-item">
                    ISBN: {book.volumeInfo.industryIdentifiers[1].identifier}
                </p>
              )}
            </div>
            <div>
              <p>{book.volumeInfo.description}</p>
            </div>
          </div>
          <div className="details-img-container col-12 col-md-4 col-lg-3">
            {book.volumeInfo.imageLinks && (
              <img 
                src={book.volumeInfo.imageLinks.thumbnail} 
                className="details-img col-10 show" 
                alt={book.volumeInfo.title} 
              />
            )}
            {book.saleInfo && book.saleInfo.listPrice && (
              <p className="details-price">Precio:
                <strong>{" " + book.saleInfo.listPrice.amount + " " + book.saleInfo.listPrice.currencyCode}</strong>
              </p>
            )}
            <Button color="orange" col="col-10">Comprar</Button>
          </div>
        </div>
      ) : null}
      <Footer />
    </div>
  )
}

export default Details;