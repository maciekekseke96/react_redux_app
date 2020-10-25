import React from "react";
import ProductsContent from './ProductsContent/ProductsContent'
import "./Products.scss";

const Products = () => {
  return (
    <div className="productsContainer">
      <h1>Products Available</h1>
      <ProductsContent />
    </div>
  );
};

export default Products;
