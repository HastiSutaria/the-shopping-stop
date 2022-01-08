import React from "react";
import "./Product.css";
import Product1 from "./images/p1.png"
function Product({ id, title, image, price, rating}) {
  return (
    <div className="product">
      <div className="product__info">
        <p>{ title}</p>
        <p className="product__price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating).fill().map((_, i) =>(<p>⭐</p>))}
            
            
        </div>
      </div>
      <img src={image} alt="product-image"></img>
      <button>Add to Cart</button>
    </div>
  );
}

export default Product;
