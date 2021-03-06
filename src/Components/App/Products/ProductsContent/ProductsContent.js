import React from "react";
import "./ProductsContent.scss";
import Product from "./Product/Product";
import { connect } from "react-redux";

const ProductsContent = ({ products }) => {
  return (
    <div className="productsContent">
      {products.map((product) => {
        return <Product key={product.id} product={product} />;
      })}
    </div>
  );
};

const mapStateToProps = (state) => ({
  products: state.products.items,
});

export default connect(mapStateToProps, {})(ProductsContent);
