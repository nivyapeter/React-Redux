import React from "react";
import { useSelector } from "react-redux";
import "../styles/style.css";

const ProductComponent = () => {
  const products = useSelector((state) => state.allproducts.products);
  const {id,title} = products[0];
  return (
    <div className="main">
      <div className="card"></div>
      <div className="image"></div>
        <div className="content">{title}</div>
      </div>
  );
};

export default ProductComponent;
