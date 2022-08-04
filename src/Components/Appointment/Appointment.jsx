import React from "react";
import { useRef, useState } from "react";
import Footer from "../Home/Footer/footer";
// import Intro from "../Home/Intro/Intro";
import Navbar from "../Home/Navbar/Navbar";
// import Stuff11 from "../Home/Stuff11/Stuff11";
import "./Appointment.css";
import emailjs from "@emailjs/browser";
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

  const formRef = useRef();
  const [setDone] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("MHS", "MHS_0001", formRef.current, "cMO-4Vf59a5tJSHqT")

      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
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
      <form
        onSubmit={handleSubmit}
        ref={formRef}
        className="login-card"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        <input
          type="text"
          className="login-input"
          placeholder="Enter Full Name"
          required
          name="user_name"
        />
        <br />
        <br />
        <br />
        <input
          type="Email"
          className="login-input"
          placeholder="Enter Email"
          name="user_email"
          required
        />
        <br />
        <br />
        <br />
        <input
          type="text"
          className="login-input"
          placeholder="Enter Phone Number"
          name="user_number"
          required
        />
        <br />
        <br />
        <br />
        <select name="" id="" className="login-input">
          <option value="" selected="selected">
            - Select an option -
          </option>
          <option value="">Counselling </option>
          <option value="">Diagnosis & Treatment </option>
        </select>
        <br />
        <br />
        <br />
        <textarea
          cols="10"
          rows="5"
          className="login-input"
          placeholder="Notes to Doctor"
          name="message"
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
      </form>
      <br />
      <br />

      {/* <Stuff11 /> */}
      <Footer />
    </div>
  );
}

export default Appointment;
