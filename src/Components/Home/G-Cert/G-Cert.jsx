import React from "react";
import "./G-Cert.css";
import PIC1 from "../../../Images/GCertPic.png";
import PIC2 from "../../../Images/NIH-Logo.png";
import PIC3 from "../../../Images/Calvary.jpg";
import PIC4 from "../../../Images/CAC.png";
import PIC5 from "../../../Images/FMH.png";

const GCert = () => {
  return (
    <div className="GCert" data-aos="zoom-in-up" data-aos-duration="2000">
      <h2 className="GCert-head">
        GOVERNMENT APPROVED
        <hr style={{ background: "#49014d", margin: "auto 16vh" }} />
      </h2>

      <div className="GCert-wrapper">
        <div className="GCert-1">
          <img src={PIC1} alt="" className="GPic1" />
        </div>
        <div className="GCert-2">
          <p>
            We do not just exist, we are licensed to perform our duties. Our
            sole aim being restoring health to the sick and counsel to those who
            have lost mental harmony.
          </p>
          <br />
          <div style={{ textAlign: "center" }}>
            <img src={PIC3} alt="" className="GPic3" />
            <img src={PIC2} alt="" className="GPic2" />
            <img src={PIC4} alt="" className="GPic4" />
            <img src={PIC5} alt="" className="GPic5" />
          </div>
        </div>
      </div>
      <div className="h-five"></div>
    </div>
  );
};

export default GCert;
