import React from "react";
import "./Header.css";
export default function Header() {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Order your favourite food here</h2>
        <p>
          choose from a diverse menu featuring a delectable array of dishes
          crafted with the finest ingredients and culinary expertise.
        </p>
        <button>View Menu</button>
      </div>
    </div>
  );
}
