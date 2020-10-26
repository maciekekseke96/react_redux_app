import React from "react";
import { connect } from "react-redux";
import { basketActions } from "./../../../../../redux-ducks/basket/index";
import "./Product.scss";

const Product = ({ product, add, stateBasket }) => {
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
  const productToSend = {
    ...product,
    quantity: 1,
  };
  const addProductToCart = (event) => {
    event.preventDefault();
    add({ productToSend, stateBasket });
  };
  return (
    <div className="product">
      <div className="productImg" style={productImgStyles}></div>
      <p className="productTitle">{product.title}</p>
      <p className="productPrice">
        Price: <span>{productPrice}</span>
      </p>
      <button onClick={addProductToCart} className="addToCartBtn">
        ADD TO CART
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  stateBasket: state.basket,
});

const mapDispatchToProps = (dispatch) => ({
  add: (product) => dispatch(basketActions.add(product)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Product);
