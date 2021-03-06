
import Stuff11 from "./Components/Home/Stuff11/Stuff11";

import Imp from "./Components/Home/Importance/Imp";
import Intro from "./Components/Home/Intro/Intro";
import Navbar from "./Components/Home/Navbar/Navbar";
import Resource from "./Components/Home/Resources/Resource";
import Touch from "./Components/Home/Get-In-Touch/Touch";
import Footer from "./Components/Home/Footer/footer";
import OB from "./Components/Home/Our-Blog/OB";
import RWU from "./Components/Home/Reg-W-Us/RWU";
import React from "react";
import "aos/dist/aos.css";

import "./Home.css";
 

const Home = () => {
  return (
    <div>
      {/* Approved */}
      <Navbar />
      {/* Approved */}
      <Intro />
      {/* Approved */}
      <Stuff11 />
      {/* Not Approved */}
      <Imp />
      {/* Not Approved */}
      <Resource />
      <Touch />
      <RWU />
      {/* Approved */}
      <OB />
      <Footer />
    </div>
  );
};

export default Home;
