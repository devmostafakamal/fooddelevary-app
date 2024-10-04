import React, { useState } from "react";
import "./LoginPopup.css";
import { assets } from "../../../public/assets/Food Del Frontend Assets/assets/assets";
export default function LoginPopup({ setShowLogin }) {
  const [currState, setCurrState] = useState("Login");
  return (
    <div className="login-popup">
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="login-popup-inputs">
          {currState === "Login" ? (
            <></>
          ) : (
            <input type="text" placeholder="your name" required />
          )}
          <input type="email" placeholder="your email" required />
          <input type="password" placeholder="your password" required />
        </div>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, i agree to the terms of use and privacy policy</p>
        </div>
        {currState === "Login" ? (
          <p>
            Create a new account?
            <span onClick={() => setCurrState("Sign Up")}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account?
            <span onClick={() => setCurrState("Login")}>Login here</span>
          </p>
        )}

        <button>{currState === "Sign Up" ? "create account" : "Login"}</button>
      </form>
    </div>
  );
}
