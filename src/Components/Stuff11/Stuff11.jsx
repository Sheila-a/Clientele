import React from "react";
import "./Stuff11.css";
import Job from "../../Images/job.png";
import Resource from "../../Images/resources.png";
import Consult from "../../Images/consulting.png";

const Stuff11 = ({ img, link }) => {
  return (
    <div className="Desc">
      <div className="Desc_content">
        <div className="logo"></div>
        <img src={Consult} alt="" className="logoo" />
        <div className="title">Detailed Consultation</div>
        <div className="line"></div>
        <div className="content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
          consequatur voluptatem beatae harum praesentium quia!
        </div>
      </div>
      <div className="Desc_content">
        <div className="logo"></div>
        <img src={Resource} alt="" className="logoo" />
        <div className="title">Amazing Resources</div>
        <div className="line"></div>
        <div className="content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
          minima.
        </div>
      </div>
      <div className="Desc_content">
        <div className="logo"></div>
        <img src={Job} alt="" className="logoo" />
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
