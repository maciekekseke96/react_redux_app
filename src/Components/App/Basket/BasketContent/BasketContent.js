import React from "react";
import { connect } from "react-redux";
import BasketItem from "./BasketItem/BasketItem";
import "./BasketContent.scss";
import Basket from "../Basket";

const BasketContent = ({ products }) => {
  return (
    <div className="basketContent">
      {products.map((product) => {
        return <BasketItem key={product.id} product={product} />;
      })}
    </div>
  );
};

const mapStateToProps = (state) => ({
  products: state.basket.items,
});

export default connect(mapStateToProps, {})(BasketContent);
