import React from "react";
import "./Imp.css";
// import StethLap from "../../../Images/steth_laptop.png";
// import Doc from "../../../Images/doctor_.png";
import sideImg from "../.././../Images/IMG-20220729-WA0004.jpg";

import { Link } from "react-router-dom";

const Imp = () => {
  return (
    <div className="Importance">
      {/* <div className="images" data-aos="zoom-in" data-aos-duration="1000">
        <div className="Doc ImpImg">
          <img src={Doc} alt="" className="Doct" />
        </div>
        <div className="StethLap ImpImg">
          <img src={StethLap} alt="" className="Steth" />
        </div>
      </div> */}
      <div className="ImpText" data-aos="zoom-in" data-aos-duration="1000">
        <div className="ImpTextHide" data-aos="fade-up">
          <h2 className="ImpHead">OUR IMPORTANCE</h2>
          <div style={{ display: "flex", marginBottom: "10vh" }}>
            <p className="ImpCont">
              {/* Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id fugit
            repellat distinctio cupiditate consequatur illum accusantium ipsum
            vitae perferendis molestiae at dicta veniam quam obcaecati nam porro
            voluptatibus quo incidunt itaque ex quisquam hic, ipsa eligendi
            autem? Impedit quod libero pariatur ut, aperiam iste earum at
            tempore dolorum, perspiciatis non. */}
              Health Care Services at its best. We pride ourselves in the
              natural way of Disease and ailment treatment from our trusted
              sources of Homeopathic Medicine. Our aim is to restore health to
              the sick with quick recovery rate Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Similique. the sick with quick
              recovery rate Lorem, ipsum dolor sit amet consectetur adipisicing
              elit. Similique.
            </p>
            <img src={sideImg} alt="" className="sideIMG" />
          </div>

          <span className="IPP-btn">
            <Link to="/register">
              Register <span className="fas fa-chevron-right"></span>
            </Link>
          </span>
          <span className="IPP-btn">
            <Link to="/book-an-appointment">
              Book An Appointment <span className="fas fa-chevron-right"></span>
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Imp;
