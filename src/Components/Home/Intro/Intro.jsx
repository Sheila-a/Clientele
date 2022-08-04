import React from "react";
import "bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./Intro.css";
import { Link } from "react-router-dom";
import Flag from "../../../Images/N4L.png";
import Doc from "../../../Images/intro-pic.png";
import introLogo from "../../../Images/Footer2.png";

const Intro = () => {
  return (
    <div
      className="Intro"
      id="home"
      data-aos="fade-in"
      data-aos-duration="1000"
    >
      <div className="Intro-intro">
        <div className="Intro-cont"></div>
        <div className="Intro-flex">
          <div
            className="Intro-text"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <img src={introLogo} alt="" className="introLogo" />
            <div className="Welcome">Welcome to</div>
            <div>
              <p className="Name">
                <b>
                  MA<span>RI</span>AN
                </b>
              </p>
              <p className="NameSub">Homeopathic Sanatorium </p>
            </div>
            <div className="Motto">...a medical clinic for all ages</div>
            <div className="button">
              <button
                className="intro-btn 
              
              "
              >
                {/* <Link to="/register">
                  Register <span className="fas fa-chevron-right"></span>
                </Link> */}
                <Link to="/book-an-appointment">
                  Book an Appointment{" "}
                  <span className="fas fa-chevron-right"></span>
                </Link>
              </button>
              {/* <button className="OB-btn">
                <Link to="/login">
                  Login <span className="fas fa-chevron-right"></span>
                </Link>
              </button> */}
            </div>
          </div>
          <div
            className="Intro-pic"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            {/* <div className="flag">
              <img src={Flag} alt="" className="flagg" />
            </div> */}
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
