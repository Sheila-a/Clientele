import React from "react";
import "./OB.css";

import IMG1 from "../../../Images/surgery-1822458.jpg";
import IMG2 from "../../../Images/doctor_.png";
import IMG3 from "../../../Images/steth_laptop.png";
// import IMG4 from "../../../Images/lady_doc.png";

const OB = () => {
  return (
    <div className="OB" data-aos="fade-up" data-aos-duration="1500">
      <section className="OB-blogs" id="OB-blogs">
        <h1 className="OB-heading">
          Our <span>blogs</span>
        </h1>

        <div className="OB-box-container">
          <div
            className="OB-box"
            data-aos="fade-out"
            data-aos-duration="1000"
            // data-aos-anchor-placement="center-bottom"
          >
            <div className="OB-images">
              <img src={IMG1} alt="" className="OB-image" />
            </div>
            <div className="OB-content">
              <div className="OB-icon">
                <a href="/">
                  <i className="fas fa-calendar"></i> 1st May, 2022
                </a>
                <a href="/">
                  <i className="fas fa-user"></i> by admin{" "}
                </a>
              </div>
              <h3>blog title here</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem, voluptates!
              </p>
              <a href="/" className="OB-btn">
                learn more <span className="fas fa-chevron-right"></span>
              </a>
            </div>
          </div>
          <div
            className="OB-box"
            data-aos="fade-out"
            data-aos-duration="3000"
            // data-aos-anchor-placement="center-bottom"
          >
            <div className="OB-images">
              <img src={IMG2} alt="" className="OB-image" />
            </div>
            <div className="OB-content">
              <div className="OB-icon">
                <a href="/">
                  <i className="fas fa-calendar"></i> 1st May, 2022
                </a>
                <a href="/">
                  <i className="fas fa-user"></i> by admin{" "}
                </a>
              </div>
              <h3>blog title here</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem, voluptates!
              </p>
              <a href="/" className="OB-btn">
                learn more <span className="fas fa-chevron-right"></span>
              </a>
            </div>
          </div>
          <div
            className="OB-box"
            data-aos="fade-out"
            data-aos-duration="5000"
            // data-aos-anchor-placement="center-bottom"
          >
            <div className="OB-images">
              <img src={IMG3} alt="" className="OB-image" />
            </div>
            <div className="OB-content">
              <div className="OB-icon">
                <a href="/">
                  <i className="fas fa-calendar"></i> 1st May, 2022
                </a>
                <a href="/">
                  <i className="fas fa-user"></i> by admin{" "}
                </a>
              </div>
              <h3>blog title here</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem, voluptates!
              </p>
              <a href="/" className="OB-btn">
                learn more <span className="fas fa-chevron-right"></span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OB;
