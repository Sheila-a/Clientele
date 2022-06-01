import React from "react";
import Imp from "./Components/Importance/Imp";
import Intro from "./Components/Intro/Intro";
import Navbar from "./Components/Navbar/Navbar";
import Resource from "./Components/Resources/Resource";
import Stuff11 from "./Components/Stuff11/Stuff11";
import Touch from "./Components/Get In Touch/Touch";
import Footer from "./Components/Footer/footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Intro />
      <Stuff11 />
      <Imp />
      <Resource />
      <Touch />
      <Footer />
    </div>
  );
};

export default Home;