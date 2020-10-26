import React from "react";
import { connect } from "react-redux";
import { basketActions } from "./../../../../../redux-ducks/basket/index";
import "./BasketItem.scss";

const BasketItem = ({ product, remove, stateBasket }) => {
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
    productPrice = product.price.toFixed(2);
    totalAmmount = (product.quantity * productPrice).toFixed(2);
  } else {
    productPrice = "Unknown";
    totalAmmount = "Unknown";
  }

  const removeFromBasket = (event) => {
    event.preventDefault();
    remove({ product, stateBasket });
  };
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
        <button onClick={removeFromBasket}>X</button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  stateBasket: state.basket,
});

const mapDispatchToProps = (dispatch) => ({
  remove: (product) => dispatch(basketActions.remove(product)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BasketItem);
