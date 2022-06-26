import React from "react";
import Register from "./Components/Register/Register";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Components/About/About";
import Services from "./Components/Our Services/Services";
import Contact from "./Components/Contact/Contact";
import Career from "./Components/Our Services/Services/Career/Career";
import Consultation from "./Components/Our Services/Services/Consultation/Consultation";
import Diagnosis from "./Components/Our Services/Services/Diagnosis/Diagnosis";
import FDoc from "./Components/Our Services/Services/For Doctors/FDoc";
import Homeopathy from "./Components/Our Services/Services/Homeopathy/Homeopathy";
import PTherapy from "./Components/Our Services/Services/Physical Therapy/PTherapy";
import Appointment from "./Components/Appointment/Appointment";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/our-services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/book-an-appointment" element={<Appointment />} />
          <Route path="/register" element={<Register />} />
          <Route path="/career" element={<Career />} />
          <Route path="/consultation" element={<Consultation />} />
          <Route path="/diagnosis" element={<Diagnosis />} />
          <Route path="/for-doctors" element={<FDoc />} />
          <Route path="/homeopathy" element={<Homeopathy />} />
          <Route path="/physical-therapy" element={<PTherapy />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
