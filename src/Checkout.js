import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import add from "./images/aatmanirbhar.jpg";
function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__left">
        {/* <img className="checkout__add" src={add} alt=""></img> */}
        <div>
          <h2 className="checkout__title">Your Shopping Cart</h2>
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
