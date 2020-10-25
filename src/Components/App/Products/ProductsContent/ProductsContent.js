import React from "react";
import "./ProductsContent.scss";
import Product from "./Product/Product";
import { connect } from "react-redux";

const ProductsContent = ({ products }) => {
  console.log(products);
  return <div className="productsContent">
      {products.map((product)=>{
        return <Product key={product.id} />
      })}
  </div>;
};

const mapStateToProps = (state) => ({
  products: state.products.items,
});

export default connect(mapStateToProps, {})(ProductsContent);
