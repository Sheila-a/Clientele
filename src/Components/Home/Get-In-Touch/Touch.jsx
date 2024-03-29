import React from "react";
import "./Touch.css";
import Lady from "../../../Images/lady_doc.png";

const Touch = () => {
  return (
    <div className="GITouch">
      <div className="Touch"></div>

      <div className="Touch_text">
        <div className="Touch-left">
          <img
            src={Lady}
            alt=""
            className="left-pic"
            data-aos="zoom-out"
            data-aos-duration="1000"
          />
        </div>
        <div
          className="Touch-right"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
          <h2 className="Touch-title cent">Sign up for Newsletter</h2>
          <p className="Right-text cent">
            {" "}
            Get recent updates to our services, community hangouts and
            educational resources by signing up for our Newsletter below.
          </p>
          <form action="" className="Form">
            <p className="Form-title">Fullname</p>
            <input type="text" className="form-input" />

            <p className="Form-title">Email</p>
            <input type="email" className="form-input" />

            {/* <p className="Form-title">Your message</p>
            <input type="text" className="msg-input" /> */}
          </form>
          <button className="Touch-btn">
            Submit <span className="fas fa-chevron-right"></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Touch;
