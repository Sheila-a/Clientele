import React from "react";
import "./Resource.css";
import Pics from "../../Images/surgery-1822458.jpg";

const Resource = () => {
  return (
    <div className="Resource_wrapper">
      <h2 className="Resc_title">Best resources for you</h2>
      <div className="Resource">
        <div className="Resc_detail">
          <div className="">
            <img src={Pics} alt="" className="Pics" />
          </div>
          <div className="detail_title">
            <h3>FAQs</h3>
          </div>
          <div className="Resc_content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            consequatur voluptatem beatae harum praesentium quia!
          </div>
        </div>
        <div className="Resc_detail">
          <div className="">
            <img src={Pics} alt="" className="Pics" />
          </div>
          <div className="detail_title">
            <h3>Homeopathic Products</h3>
          </div>
          <div className="Resc_content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            consequatur voluptatem beatae harum praesentium quia!
          </div>
        </div>
        <div className="Resc_detail">
          <div className="">
            <img src={Pics} alt="" className="Pics" />
          </div>
          <div className="detail_title">
            <h3>Educational Videos</h3>
          </div>
          <div className="Resc_content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            consequatur voluptatem beatae harum praesentium quia!
          </div>
        </div>
        <div className="Resc_detail">
          <div className="">
            <img src={Pics} alt="" className="Pics" />
          </div>
          <div className="detail_title">
            <h3>Newsletter</h3>
          </div>
          <div className="Resc_content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            consequatur voluptatem beatae harum praesentium quia!
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resource;
