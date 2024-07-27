import React from "react";
import CardButton from "./CardButton";
import { currencyFormat } from "../../utils";

const Card = ({ name, price }) => {
  return (
    <div className="product-card">
      <div className="product-thumbnail"></div>
      <h2 className="product-name">{name}</h2>
      <label className="product-price">{currencyFormat(price)}</label>
      <CardButton />
    </div>
  );
};

export default Card;
