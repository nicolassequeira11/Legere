import React from "react";
import Button from "./Buttons";

const newText = (text, maxLength) => {
  if (text.length > maxLength) {
    return text.slice(0, maxLength) + "...";
  }
  return text;
};

const Card = ({ title: originalTitle, img, price, author, onClick }) => {
  const newTitle = newText(originalTitle, 26);
  
  return(
    <div className="card-container col-12 col-sm-6 col-lg-4 col-xl-3">
      <div>
        <img src={`${img}`} className="card-img rounded-3" />
      </div>
      <div className="card-info-container mt-3 mb-5">
        <h6 className="card-title col-8 my-0">{newTitle}</h6>
        <p className="card-author text-muted"><small>{author}</small></p>
        <p className="card-price col-8">{price}</p>
        <Button color="orange" onClick={onClick} col="col-8">Ver detalle</Button>
      </div>
    </div>
  )
}

export default Card;