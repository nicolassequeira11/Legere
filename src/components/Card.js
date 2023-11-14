import React from "react";
import Button from "./Buttons";

const newText = (text, maxLength) => {
  if (text.length > maxLength) {
    return text.slice(0, maxLength) + "...";
  }
  return text;
};

const Card = ({ title: originalTitle, img, price, author }) => {
  const newTitle = newText(originalTitle, 26);
  
  return(
    <div className="card-container col-12 col-sm-6 col-lg-4 col-xl-3">
      <div className="col-12 col-12">
        <img src={`${img}`} className="d-flex m-auto col-8 object-fit-cover rounded-3" height={330} />
      </div>
      <div className="mt-3 mb-5">
        <h6 className="text-center col-8 mx-auto my-0">{newTitle}</h6>
        <p className="text-muted m-auto text-center"><small>{author}</small></p>
        <p className="text-center col-8 mx-auto">{price}</p>
        <Button color="orange" col="col-7">Ver detalle</Button>
      </div>
    </div>
  )
}

export default Card;