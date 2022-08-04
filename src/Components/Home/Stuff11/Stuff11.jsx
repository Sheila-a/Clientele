import React from "react";
import "./Stuff11.css";
import Job from "../../../Images/job.png";
import Resource from "../../../Images/document.png";
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
        <div className="logo">
          <img src={Consult} alt="" className="logoo logo-1" />
        </div>
        <div className="title">Detailed Consultation</div>
        <div className="line"></div>
        <div className="content">
          {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          natus sunt nobis aut ullam? Porro molestiae, totam laudantium
          voluptate earum, quam error neque accusamus hic eos rem quis vero.
          Modi? error neque accusamus vgy */}
          Get the best service regarding health with our friendly Doctors. Have
          a Detailed Consultation and get treated properly and wholely. Our
          one-on-one meet with our Doctor leaves no stone unturned.
        </div>
      </div>
      <div className="Desc_content" data-aos="fade-up" data-aos-duration="2000">
        <div className="logo">
          <img src={Resource} alt="" className="logoo logo-2" />
        </div>
        <div className="title">Amazing Resources</div>
        <div className="line"></div>
        <div className="content">
          {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          pariatur neque officiis, tempora, blanditiis eum iusto placeat nostrum
          similique hic repellat aspernatur necessitatibus suscipit veniam
          dolores quo. */}
          A wealth of resources at your disposal entailing all you need to know
          about Homeopathy. Learn more about our health approach and stay ahead
          of others.
        </div>
      </div>
      <div className="Desc_content" data-aos="fade-up" data-aos-duration="3000">
        <div className="logo">
          <img src={Job} alt="" className="logoo logo-3" />
        </div>
        <div className="title">Career Opportunities</div>
        <div className="line"></div>
        <div className="content">
          {/* Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus
          quaerat ab hic debitis quasi repellendus, ex quia consectetur
          nesciunt, quo ipsum ad deserunt magni quod, illo neque magnam vel
          inventore! */}
          At Marian Homeopathic Sanatorium, we also have career opportunities
          for all qualified personnel. Kindly go to the Services option and
          apply for open jobs.
        </div>
      </div>
    </div>
  );
};

export default Stuff11;
