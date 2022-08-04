import React from "react";
import Register from "./Components/Register/Register";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OurDoctor from "./Components/About-Us/Our-Doctor/About";
import OurStaff from "./Components/About-Us/Our-Staff/About";
// import Services from "./Components/Our-Services/Services";
import Contact from "./Components/Contact/Contact";
import Covid from "./Components/Covid-19/CV_19";
import Career from "./Components/Our-Services/Services/Career/Career";
import Consultation from "./Components/Our-Services/Services/Consultation/Consultation";
import FDoc from "./Components/Our-Services/Services/For Doctors/FDoc";
import Homeopathy from "./Components/Our-Services/Services/Homeopathy/Homeopathy";
import PTherapy from "./Components/Our-Services/Services/Physical-Therapy/PTherapy";
import Appointment from "./Components/Appointment/Appointment";
import CEvents from "./Components/About-Us/Community-Events/C-Events";
import Repertory from "./Components/Our-Services/Services/Repertorization/Repert";
import Blog from "./Components/Blog/Blog";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/covid-19-policy" element={<Covid />} />
          <Route path="/meet-our-doctor" element={<OurDoctor />} />
          <Route path="/community-events" element={<CEvents />} />
          {/* <Route path="/our-services" element={<Services />} /> */}
          <Route path="/meet-our-staff" element={<OurStaff />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/book-an-appointment" element={<Appointment />} />
          <Route path="/register" element={<Register />} />
          <Route path="/career" element={<Career />} />
          <Route path="/consultation" element={<Consultation />} />
          <Route path="/repertorization" element={<Repertory />} />
          <Route path="/for-doctors" element={<FDoc />} />
          <Route path="/homeopathy" element={<Homeopathy />} />
          <Route path="/physical-therapy" element={<PTherapy />} />
          <Route path="/blogs" element={<Blog />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
