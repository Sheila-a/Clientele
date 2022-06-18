import React from "react";
import "./Stuff11.css";
import Job from "../../../Images/job.png";
import Resource from "../../../Images/resources.png";
import Consult from "../../../Images/consulting.png";

const Stuff11 = () => {
  return (
    <div className="Desc" data-aos="fade-up" data-aos-duration="1500">
      <div
        className="Desc_content"
        data-aos="fade-out"
        data-aos-duration="1000"
        data-aos-anchor-placement="center-bottom"
      >
        <div className="logo"></div>
        <img src={Consult} alt="" className="logoo logo-1" />
        <div className="title">Detailed Consultation</div>
        <div className="line"></div>
        <div className="content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
          consequatur voluptatem beatae harum praesentium quia!
        </div>
      </div>
      <div className="Desc_content" data-aos="fade-up" data-aos-duration="2000">
        <div className="logo"></div>
        <img src={Resource} alt="" className="logoo logo-2" />
        <div className="title">Amazing Resources</div>
        <div className="line"></div>
        <div className="content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
          minima.
        </div>
      </div>
      <div className="Desc_content" data-aos="fade-up" data-aos-duration="3000">
        <div className="logo"></div>
        <img src={Job} alt="" className="logoo logo-3" />
        <div className="title">Career Opportunities</div>
        <div className="line"></div>
        <div className="content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dolorum
          nisi id distinctio possimus.
        </div>
      </div>
    </div>
  );
};

export default Stuff11;
