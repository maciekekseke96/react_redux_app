import React from "react";
import { connect } from "react-redux";
import "./TotalCost.scss";

const TotalCost = ({ stateBasket }) => {
  let total = 0;
  stateBasket.items.forEach((item) => {
    if (item.price !== "Unknown") {
      total += item.quantity * item.price;
    }
  });
  return (
    <div className="totalCost">
      <h2>Total Cost: {total.toFixed(2)}</h2>
    </div>
  );
};

const mapStateToProps = (state) => ({
  stateBasket: state.basket,
});
export default connect(mapStateToProps, {})(TotalCost);
