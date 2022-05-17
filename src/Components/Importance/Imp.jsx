import React from "react";
import "./Imp.css";
import StethLap from "../../Images/steth_laptop.png";
import Doc from "../../Images/doctor_.png";

import { Link } from "react-router-dom";

const Imp = () => {
  return (
    <div className="Importance">
      <div className="images">
        <div className="Doc ImpImg">
          <img src={Doc} alt="" className="Doct" />
        </div>
        <div className="StethLap ImpImg">
          <img src={StethLap} alt="" className="Steth" />
        </div>
      </div>
      <div className="ImpText">
        <h2 className="ImpHead">Our Importance</h2>
        <p className="ImpCont">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id fugit
          repellat distinctio cupiditate consequatur illum accusantium ipsum
          vitae perferendis molestiae at dicta veniam quam obcaecati nam porro
          voluptatibus quo incidunt itaque ex quisquam hic, ipsa eligendi autem?
          Impedit quod libero pariatur ut, aperiam iste earum at tempore
          dolorum, perspiciatis non.
        </p>
        <button className="Imp-btn">
          <Link to="/register">Register</Link>
        </button>
      </div>
    </div>
  );
};

export default Imp;
