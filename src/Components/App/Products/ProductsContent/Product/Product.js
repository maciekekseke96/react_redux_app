import React from "react";
import "./Product.scss";

const Product = ({ product }) => {
  const productImgStyles = {
    height: "60%",
    width: "80%",
    border: "1px solid black",
    margin: "10px auto",
    backgroundImage: `url(${product.cover})`,
    backgroundSize: "100% 100%",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };
  let productPrice;
  if (product.price) {
    productPrice = product.price;
  } else {
    productPrice = "Unknown";
  }
  return (
    <div className="product">
      <div className="productImg" style={productImgStyles}></div>
      <p className="productTitle">{product.title}</p>
      <p className="productPrice">Price: <span>{productPrice}</span></p>
      <button className="addToCartBtn">ADD TO CART</button>
    </div>
  );
};

export default Product;
