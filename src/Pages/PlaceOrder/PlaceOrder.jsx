import React from "react";
import "./PlaceOrder.css";
export default function PlaceOrder() {
  return (
    <form className="place-order">
      <div className="place-order-left">
        <p className="title">Delevary information</p>
        <div className="multi-fields">
          <input type="text" placeholder="first-name" />
          <input type="text" placeholder="last-name" />
        </div>
        <input type="email" placeholder="Email Address" />
        <input type="text" placeholder="street" />
        <div className="multi-fields">
          <input type="text" placeholder="city" />
          <input type="text" placeholder="state" />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder="Zip code" />
          <input type="text" placeholder="country" />
        </div>
        <input type="text" placeholder="phone" />
      </div>
      <div className="place-order-right"></div>
    </form>
  );
}
