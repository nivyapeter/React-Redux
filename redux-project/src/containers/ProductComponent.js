import React from "react";
import "../styles/style.css";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.product);
  const {id,title} = products;
  return (
    <div className="main">
      <div className="card"></div>
      <div className="image">
        <div className="content"></div>
      </div>
    </div>
  );
};

export default ProductComponent;
