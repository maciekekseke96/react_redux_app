import React from "react";
import BasketContent from "./BasketContent/BasketContent";
import "./Basket.scss";

const Basket = () => {
  return (
    <div className="basketContainer">
      <h1>Basket</h1>
      <BasketContent />
    </div>
  );
};

export default Basket;
