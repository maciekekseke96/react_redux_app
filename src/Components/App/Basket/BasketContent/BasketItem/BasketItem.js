import React from "react";
import "./BasketItem.scss";

const BasketItem = ({ product }) => {
  const basketItemImgStyles = {
    height: "100%",
    width: "20%",
    backgroundImage: `url(${product.cover})`,
    backgroundSize: "100% 100%",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };
  let productPrice, totalAmmount;
  if (product.price) {
    productPrice = product.price;
    totalAmmount = product.quantity * productPrice;
  } else {
    productPrice = "Unknown";
    totalAmmount = "Unknown";
  }
  return (
    <div className="basketItem">
      <div className="basketItemImg" style={basketItemImgStyles}></div>
      <div className="basketItemInfo">
        <p className="title">{product.title}</p>
        <p className="1uantity">
          Quantity: <span>{product.quantity}</span>
        </p>
        <p className="price">
          Price: <span>{productPrice}</span>
        </p>
        <p className="ammount">
          Total Ammount:<span> {totalAmmount}</span>
        </p>
      </div>
      <div className="deleteBtnContainer">
        <button>X</button>
      </div>
    </div>
  );
};

export default BasketItem;
