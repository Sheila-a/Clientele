import React from "react";
import Navbar from "../Home/Navbar/Navbar";
import "./CV_19.css";

const CV_19 = () => {
  return (
    <div>
      <Navbar />
      <div className="CV_19">
        <h1>COVID-19 POLICY</h1>
        <p>
          Due to the COVID-19 Pandemic, the operations in the Clinic have been
          adjusted. Mayors Clinic wishes to thank all our patients as we walk
          through this together. In effort to keep staff and patients safe, we
          encourage safe practices as advised by the Nigeria Center for Disease
          Control:
        </p>
        <ul>
          <li>Safe social or physical distancing</li>
          <li>Stay home unless for emergencies and avoid gatherings</li>
          <li>
            Cough or sneeze into your elbow (if you can’t hold it) and wear face
            mask as much as possible.
          </li>
          <li>
            Wash hand with soap and water for 20 seconds at least and if not
            available use sanitizer.
          </li>
          <li>Disinfect work surfaces, counters, railings and doorknobs</li>
        </ul>

        <p>
          We will screen for possible COVID-19 Infection for all Clinic visits
          with questions and taking your body temperature prior to entry. For
          your safety, other patients and staff, no visiting is allowed.
          Patients may call us at 0703 548 4102 with questions prior to arrival
          to avoid delays.
        </p>
        <b>
          <p>For all COVID-19 Inquiries, Call:</p>
        </b>
        <p>
          Nigeria center for Disease Control (NCDC): 0800-9700-0010: (Toll free)
        </p>
      </div>
    </div>
  );
};

export default CV_19;
