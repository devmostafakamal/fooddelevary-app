import React from "react";
import "./Footer.css";
import { assets } from "../../../public/assets/Food Del Frontend Assets/assets/assets";
export default function Footer() {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
            this is my new project.in this project i use react and javascript.
          </p>
          <div className="footer-social-icon">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <li>+238973268</li>
          <li>dev.mostafakamal@gmail.com</li>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 && all right reserved.yh
      </p>
    </div>
  );
}
