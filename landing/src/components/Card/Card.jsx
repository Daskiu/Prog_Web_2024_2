import React from "react";
import "./Card.css";
import { images } from "../../const/links";

export function Cards() {
  return (
    <div className="cardContainer">
      {images.map((images) => (
        <div className="cardDive" key={images.id}>
          <img className="cardImg" src= {images.src} alt="stockImage" />
          <h1 className="cardTitle">{images.title}</h1>
        </div>
      ))}
    </div>
  );
}
