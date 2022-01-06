import React from "react";
import "./Product.css";
import Product1 from "./images/p1.png"
function Product() {
  return (
    <div className="product">
      <div className="product__info">
        <p>The lean startup</p>
        <p className="product__price">
          <small>₹</small>
          <strong>100</strong>
        </p>
        <div className="product__rating">
            <p>⭐</p>
            <p>⭐</p>
            <p>⭐</p>
            <p>⭐</p>
        </div>
      </div>
      <img src={Product1} alt="p1"></img>
      <button>Add to Cart</button>
    </div>
  );
}

export default Product;
