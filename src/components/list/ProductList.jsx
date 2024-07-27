import React from "react";
import Card from "../card/Card";

const ProductList = ({ data }) => {
  return (
    <div className="product-list">
      {data?.map((product) => (
        <Card key={product?.key} name={product.value} price={product.price} />
      ))}
    </div>
  );
};

export default ProductList;
