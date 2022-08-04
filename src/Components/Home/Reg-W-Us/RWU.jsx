import React from "react";
import "./RWU.css";
import { Link } from "react-router-dom";
// import ELI from "../../../Images/Vector-7.png";

function RWU() {
  return (
    <div className="RWU">
      <h1 className="RWU-h3" data-aos="fade-up" data-aos-duration="1000">
        Book an Appointment today
      </h1>
      <p className="RWU-p" data-aos="fade-up" data-aos-duration="2000">
        Join us today and get the health treatment you deserve. Remember, we are
        a medical clinic for all ages.
      </p>
      <button className="RWU-btn" data-aos="fade-up" data-aos-duration="3000">
        <Link to="/book-an-appointment">
          Book an Appointment <span className="fas fa-chevron-right"></span>
        </Link>
      </button>
      <a href="#home">
        <div className="top">
          Back to top <span className="fas fa-arrow-up"></span>
        </div>
      </a>
      {/* <img src={ELI} alt="" className="Eli" /> */}
      {/* <img src={ELI} alt="" className="Eli2" /> */}
      {/* <img src={ELI} alt="" className="Eli3" /> */}
    </div>
  );
}

export default RWU;
