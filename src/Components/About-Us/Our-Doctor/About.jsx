import React from "react";
import "./About.css";
import DocBg from "../../../Images/doctorbg.png";
import Navbar from "../../Home/Navbar/Navbar";
import Footer from "../../Home/Footer/footer";
import GIF1 from "../../../Images/Doctors.gif";
import GIF2 from "../../../Images/COVID.gif";

const About = () => {
  return (
    <div className="ABT">
      <Navbar />

      <div className="ABT-MD">
        <div
          className="ABT-left"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <div className="ABT-bg">
            <div className="ABT-left-text">
              <h1
                className="ABT-left-title"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                Our Amazing Doctors
              </h1>
              <p
                className="MD-text"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                We have the best Doctors there is. We give the best service to
                our patients.
              </p>
              <br />
              <p
                className="MD-text"
                data-aos="fade-up"
                data-aos-duration="3000"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                sapiente, veritatis numquam placeat tenetur culpa quaerat
                obcaecati alias vel quisquam.
              </p>
            </div>
          </div>
        </div>
        <div className="ABT-right">
          <img src={GIF1} alt="" className="Gif-1" />
        </div>
      </div>
      <div className="ABT-DOC">
        <div
          className="ABT-DOC-right"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <img src={DocBg} alt="" className="ABT-doc-img" />
          <h1>Dr Maria Ugwuodo</h1>
          <h3 className="ABT-texts">CMD, Marian Homeopathic Sanatorium</h3>
          <p className="Abt-doc-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro,
            dignissimos repudiandae nisi provident error cupiditate.
            Reprehenderit eaque non laudantium iure.
          </p>
        </div>
      </div>
      <div className="ABT-MS" data-aos="zoom-in" data-aos-duration="1000">
        <div className="ABT-MS-text">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit,
            error sapiente perferendis dolore iure sequi harum laudantium
            tempore doloremque vel obcaecati atque nesciunt fugiat dolorem aut
            at praesentium nulla minima esse facere omnis? Tenetur esse fugit
            ullam incidunt quos molestias corporis voluptatem exercitationem
            distinctio minus velit praesentium, architecto saepe laborum.
          </p>
        </div>
      </div>
      <div className="ABT-MD-2" data-aos="zoom-in" data-aos-duration="1000">
        <div className="ABT-right">
          <img src={GIF2} alt="" className="Gif-2" />
        </div>
        <div className="ABT-left-2">
          <div className=" flip">
            <div className="wrapper">
              <div className="static-txt">We are</div>
              <ul className="dynamic-txts">
                <li>
                  <span>Professional</span>
                </li>
                <li>
                  <span>Deliberate</span>
                </li>
                <li>
                  <span>Conscious</span>
                </li>
                <li>
                  <span>Natural</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
