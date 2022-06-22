<<<<<<< HEAD
import Imp from "./Components/Home/Importance/Imp";
import Intro from "./Components/Home/Intro/Intro";
import Navbar from "./Components/Home/Navbar/Navbar";
import Resource from "./Components/Home/Resources/Resource";
import Stuff11 from "./Components/Home/Stuff11/Stuff11";
import Touch from "./Components/Home/Get In Touch/Touch";
import Footer from "./Components/Home/Footer/footer";
import OB from "./Components/Home/Our-Blog/OB";
import RWU from "./Components/Home/Reg w Us/RWU";
import React from "react";
import "aos/dist/aos.css";
=======
import React from "react";
import Imp from "./Components/Importance/Imp";
import Intro from "./Components/Intro/Intro";
import Navbar from "./Components/Navbar/Navbar";
import Resource from "./Components/Resources/Resource";
import Stuff11 from "./Components/Stuff11/Stuff11";
import Touch from "./Components/Get In Touch/Touch";
import Footer from "./Components/Footer/footer";
>>>>>>> b11e5c7462b3e6121b88c540035e1afaf99b94a0

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
      <OB />
      <Touch />
      <RWU />
      <Footer />
    </div>
  );
};

export default Home;
