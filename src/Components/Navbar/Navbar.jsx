import React, { useContext } from "react";
import "./Navbar.css";
import { assets } from "../../../public/assets/Food Del Frontend Assets/assets/assets";
import { Link } from "react-router-dom";
import { StoreContext } from "../../Context/StoreContext";
export default function Navbar({ setShowLogin }) {
  const { getTotalAmount } = useContext(StoreContext);
  return (
    <div className="navbar">
      <Link to="/">
        <img src={assets.logo} alt="" className="logo" />
      </Link>
      <ul className="navbar-menu">
        <Link to="/">
          <a href="#home">Home</a>
        </Link>
        <li>
          <a href="#explore-menu">Menu</a>
        </li>
        <li>
          <a href="#app-download">Mobile App</a>
        </li>
        <li>
          <a href="#footer">Contact Us</a>
        </li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="" />
          </Link>
          <div className={getTotalAmount() === 0 ? "" : "dot"}></div>
        </div>
        <button onClick={() => setShowLogin(true)}>sign in</button>
      </div>
    </div>
  );
}
