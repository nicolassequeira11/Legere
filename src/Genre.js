import React, { useState, useEffect} from "react";
import Navbar from "./components/Navbar";
import Title from "./components/Title";
import Card from "./components/Card";

const Genre = () => {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);
  const genreName = localStorage.getItem("genre");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const search = "genre=${+" + genreName + "}";
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

  return (
    <div>
      <Navbar />

      <Title title={genreName} />
      <div className="flex-wrap d-flex col-11 m-auto">
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
              />
            )
          }
        })}
      </div>
    </div>
  )
}

export default Genre;