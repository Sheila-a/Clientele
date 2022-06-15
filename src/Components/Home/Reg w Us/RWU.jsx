import React from "react";
import "./RWU.css";
import { Link } from "react-router-dom";
import ELI from "../../../Images/Ellipse 17.png";

function RWU() {
  return (
    <div className="RWU">
      <h1 className="RWU-h3">Register with us today</h1>
      <p className="RWU-p">
        Join us today and get the health treatment you deserve. Lorem ipsum
        dolor sit amet, consectetur adipisicing elit. Doloribus, molestias.
      </p>
      <button className="Intro-btn">
        <Link to="/register">Register</Link>
      </button>
      {/* <img src={ELI} alt="" className="Eli" /> */}
      {/* <img src={ELI} alt="" className="Eli2" /> */}
      {/* <img src={ELI} alt="" className="Eli3" /> */}
    </div>
  );
}

export default RWU;
