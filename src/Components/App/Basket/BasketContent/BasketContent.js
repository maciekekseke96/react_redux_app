import React from "react";
import { connect } from "react-redux";
import BasketItem from "./BasketItem/BasketItem";
import "./BasketContent.scss";
import Basket from "../Basket";
import TotalCost from "./TotalCost/TotalCost";

const NoData = () => {
  return (
    <div className="noData">
      <h1>No items added</h1>
    </div>
  );
}

const BasketContent = ({ products }) => {
  return (
    <div className="basketContent">
      {products.length > 0 &&
        products.map((product) => {
          return <BasketItem key={product.id} product={product} />;
        })}
      {products.length === 0 && <NoData />}
      <TotalCost />
    </div>
  );
};

const mapStateToProps = (state) => ({
  products: state.basket.items,
});

export default connect(mapStateToProps, {})(BasketContent);
