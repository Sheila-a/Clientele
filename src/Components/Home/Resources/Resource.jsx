import React from "react";
import "./Resource.css";
import Pics from "../../../Images/resources.jpg";
import Pics2 from "../../../Images/resources-2.jpg";
import Pics3 from "../../../Images/resources-3.jpg";
import Pics4 from "../../../Images/resources-4.jpg";

const Resource = () => {
  return (
    <div
      className="Resource_wrapper"
      data-aos="fade-up"
      data-aos-duration="1500"
    >
      <h2 className="Resc_title">Best resources for you</h2>
      <div className="Resource">
        <div
          className="Resc_detail"
          data-aos="zoom-in"
          data-aos-duration="1500"
          // style={{ height: "78vh" }}
        >
          <div className="">
            <img src={Pics} alt="" className="Pics" />
          </div>
          <div className="detail_title faq">
            <h3>FAQs</h3>
          </div>
          <div className="Resc_content">
            Do you know that your immune system is enhanced by Homeopathic
            Treatment? Do you also know that our Drug Administration methods are
            all-age-friendly?
          </div>
        </div>
        <div
          className="Resc_detail"
          data-aos="zoom-in"
          data-aos-duration="1500"
          style={{ height: "62vh" }}
        >
          <div className="">
            <img src={Pics2} alt="" className="Pics" />
          </div>
          <div className="detail_title HP">
            <h3>Homeopathic Products</h3>
          </div>
          <div className="Resc_content">
            <p>
              Our Remedies sourced naturally have been proven for its efficacy
              in disease annihilation.{" "}
            </p>
          </div>
        </div>
        <div
          className="Resc_detail"
          data-aos="zoom-in"
          data-aos-duration="1500"
          style={{ height: "65vh" }}
        >
          <div className="">
            <img src={Pics3} alt="" className="Pics" />
          </div>
          <div className="detail_title ED">
            <h3>Educational Videos</h3>
          </div>
          <div className="Resc_content">
            {" "}
            Don't like to read? Learn by watching our videos and have same
            knowledge as to reading. Detailed videos with practical examples.
          </div>
        </div>
        <div
          className="Resc_detail"
          data-aos="zoom-in"
          data-aos-duration="1500"
          style={{ height: "55vh" }}
        >
          <div className="">
            <img src={Pics4} alt="" className="Pics" />
          </div>
          <div className="detail_title news">
            <h3>Newsletter</h3>
          </div>
          <div className="Resc_content">
            Stay ahead of others with our monthly Newsletter
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resource;
