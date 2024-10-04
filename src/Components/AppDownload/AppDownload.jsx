import React from "react";
import "./AppDownload.css";
import { assets } from "../../../public/assets/Food Del Frontend Assets/assets/assets";
export default function AppDownload() {
  return (
    <div className="app-download" id="app-download">
      <p>
        For better experince download <br /> Tomato App
      </p>
      <div className="app-download-platforms">
        <img src={assets.play_store} alt="" />
        <img src={assets.app_store} alt="" />
      </div>
    </div>
  );
}
