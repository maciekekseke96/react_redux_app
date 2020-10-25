import React from "react";
import Products from "./Products/Products";
import Basket from "./Basket/Basket";
import { connect } from "react-redux";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <Products />
      <Basket />
    </div>
  );
}

const mapStateToProps = (state) => ({
  products: state.products.items,
});

export default connect(mapStateToProps, {})(App);
