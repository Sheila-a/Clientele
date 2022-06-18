import React from "react";
import "./Stuff11.css";
// import Job from "../../../Images/job.png";
// import Resource from "../../../Images/resources.png";
// import Consult from "../../../Images/consulting.png";

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
        {/* <img src={Consult} alt="" className="logoo logo-1" /> */}
        <div className="title">Detailed Consultation</div>
        <div className="line"></div>
        <div className="content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          natus sunt nobis aut ullam? Porro molestiae, totam laudantium
          voluptate earum, quam error neque accusamus hic eos rem quis vero.
          Modi? error neque accusamus vgy
        </div>
      </div>
      <div className="Desc_content" data-aos="fade-up" data-aos-duration="2000">
        <div className="logo"></div>
        {/* <img src={Resource} alt="" className="logoo logo-2" /> */}
        <div className="title">Amazing Resources</div>
        <div className="line"></div>
        <div className="content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          pariatur neque officiis, tempora, blanditiis eum iusto placeat nostrum
          similique hic repellat aspernatur necessitatibus suscipit veniam
          dolores quo.
        </div>
      </div>
      <div className="Desc_content" data-aos="fade-up" data-aos-duration="3000">
        <div className="logo"></div>
        {/* <img src={Job} alt="" className="logoo logo-3" /> */}
        <div className="title">Career Opportunities</div>
        <div className="line"></div>
        <div className="content">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus
          quaerat ab hic debitis quasi repellendus, ex quia consectetur
          nesciunt, quo ipsum ad deserunt magni quod, illo neque magnam vel
          inventore!
        </div>
      </div>
    </div>
  );
};

export default Stuff11;
