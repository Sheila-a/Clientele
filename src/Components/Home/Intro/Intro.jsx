import React from "react";
import "./Intro.css";
import { Link } from "react-router-dom";
import Flag from "../../../Images/N4L.png";
import Doc from "../../../Images/intro-pic.png";

const Intro = () => {
  return (
    <div className="Intro" data-aos="fade-in" data-aos-duration="1000">
      <div className="Intro-intro">
        <div className="Intro-cont"></div>
        <div className="Intro-flex">
          <div
            className="Intro-text"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <div className="Welcome">Welcome to</div>
            <div className="Name">
              <b>MERIEN Hospitals</b>
            </div>
            <div className="Motto">Wellness in naturality</div>
            <div className="button">
              <button className="Intro-btn">
                <Link to="/register">Register</Link>
              </button>
              <button className="Intro-btn">
                <Link to="/login">Login</Link>
              </button>
            </div>
          </div>
          <div
            className="Intro-pic"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <div className="flag">
              <img src={Flag} alt="" className="flagg" />
            </div>
            <div className="doc">
              <img src={Doc} alt="" className="docc" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
