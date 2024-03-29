import Stuff11 from "./Components/Home/Stuff11/Stuff11";

import Imp from "./Components/Home/Importance/Imp";
import Intro from "./Components/Home/Intro/Intro";
import Navbar from "./Components/Home/Navbar/Navbar";
import Resource from "./Components/Home/Resources/Resource";
import Touch from "./Components/Home/Get-In-Touch/Touch";
import Footers from "./Components/Home/Footer/footer";
import OB from "./Components/Home/Our-Blog/OB";
import RWU from "./Components/Home/Reg-W-Us/RWU";
import React from "react";
import "aos/dist/aos.css";
import GCert from "./Components/Home/G-Cert/G-Cert";

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
      {/* Approved */}
      <OB />
      <GCert />
      <Touch />
      <RWU />
      <Footers />
    </div>
  );
};

export default Home;
