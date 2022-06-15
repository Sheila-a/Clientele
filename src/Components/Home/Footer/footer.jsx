import React from "react";
import "./footer.css";
import FB from "../../../Images/FB.png";
import IG from "../../../Images/IG.png";
import YT from "../../../Images/YT.png";
import TW from "../../../Images/twitter.png";

const Footer = () => {
  return (
    <div className="tog">
      <div class="bottom-container">
        <div className="bottom-flex">
          <div className="bf1">
            <h3 className="footer-h3"> MHS</h3>
            <p className="footer-p">
              See a Doctor <br />
              Submit Sample <br /> Work for Us <br /> Contact <br /> Terms and
              Condition
            </p>
          </div>
          <div className="bf2">
            <h3 className="footer-h3">Support</h3>
            {/* <ul>
              <li>Help</li>
              <li>FAQs</li>
            </ul> */}

            <p className="footer-p">
              Help <br />
              FAQs
            </p>
          </div>
          <div className="bf3">
            <h3 className="footer-h3">Resources</h3>
            {/* <ul>
              <li>Patient resources</li>
              <li>Our Blog</li>
              <li>Educational</li>
            </ul> */}
            <p className="footer-p">
              Patient Resources <br />
              Our Blog <br />
              Educational
            </p>
          </div>
          <div className="bf4">
            <div>
              <h3 className="footer-h3">Follow Us</h3>
              <img
                src={FB}
                alt=""
                className="footer-icn foot-inc
              "
              />
              <img
                src={YT}
                alt=""
                className="footer-icn yt foot-inc
              "
              />{" "}
              <img
                src={IG}
                alt=""
                className="footer-icn foot-inc
              "
              />
              <img
                src={TW}
                alt=""
                className="footer-icn yt foot-inc
              "
              />
            </div>
            <br className="br-hide" />

            <p className="footer-p foot-inc">
              2 GRA Enugu
              <br className="br-hide" />
              Enugu, Nigeria
            </p>
            <br className="br-hide" />
            <p className="footer-p foot-inc">mhslimited@gmail.com</p>
            <br className="br-hide" />
            <p className="footer-p foot-inc">
              +234-908-345-7654, +234-810-654-765-8899
            </p>
          </div>
        </div>
        <div class="footer-hr"></div>
        <p className="footer-note">
          © 2022 Merien Hospitals. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
