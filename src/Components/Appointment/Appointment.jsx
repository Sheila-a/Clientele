import React from "react";
// import Footer from "../Home/Footer/footer";
// import Intro from "../Home/Intro/Intro";
import Navbar from "../Home/Navbar/Navbar";
// import Stuff11 from "../Home/Stuff11/Stuff11";
import "./Appointment.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Appointment() {
  let promise = () => {
    const resolveAfter2Sec = new Promise((resolve) => {
      setTimeout(resolve, 3000);
    });
    toast.promise(resolveAfter2Sec, {
      pending: "Booking is pending",
      success: "Booked Successfully!",
      autoClose: false,
      closeOnClick: true,
    });
  };
  // const notify = () => {
  //   // content,position,type(success, info, warning,error),autoclose,
  //   toast.success("Booked Successfully!", {
  //     position: toast.POSITION.TOP_RIGHT,
  //     autoClose: false,
  //     closeOnClick: true,
  //   });
  // };
  return (
    <div className="login">
      <Navbar />
      <h2 className="login-title" data-aos="fade-down" data-aos-duration="2000">
        Book an Appointment <span>with us!</span>
      </h2>
      <div className="login-card" data-aos="fade-up" data-aos-duration="1500">
        <input
          type="text"
          className="login-input"
          placeholder="Enter Full Name"
          required
        />
        <br />
        <br />
        <br />
        <input
          type="Email"
          className="login-input"
          placeholder="Enter Email"
          required
        />
        <br />
        <br />
        <br />
        <input
          type="text"
          className="login-input"
          placeholder="Enter Phone Number"
          required
        />
        <br />
        <br />
        <br />
        <textarea
          cols="10"
          rows="5"
          className="login-input"
          placeholder="Notes to Doctor"
          required
        />
        <br />
        <br />
        <br className="login-hide" />
        <br className="login-hide" />
        <label htmlFor="myCheckboxId" className="checkbox">
          <input
            type="checkbox"
            name="myCheckboxName"
            className="checkbox__input"
            id="myCheckboxId"
          />
          <div className="checkbox__box"></div>
          Please do not submit any Protected Health Information (PHI).
        </label>
        <br />
        <br />
        <button className="login-btn" onClick={promise}>
          Submit <span className="fas fa-chevron-right"></span>
        </button>
        <ToastContainer />
      </div>
      <br />
      <br />

      {/* <Stuff11 /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default Appointment;
