import React from "react";
import Navbar from "../Home/Navbar/Navbar";
import "./Login.css";

const Login = () => {
  return (
    <div className="Login">
      <Navbar />
      <div className="Login-card">
        <input type="email" className="login-input" placeholder="Email" />
        <br />
        <br />
        <br />
        <input type="password" className="login-input" placeholder="Password" />
        <br />
        <br />
        {/* <div className="login-checkbox">
          <input type="checkbox" className="login-chck" /> Keep me signed in
        </div> */}
        {/* <br />
        <br /> */}

        <button className="login-btn  ">Login</button>
        <br />
        <br />
        <br />
        <br />
        <label htmlFor="myCheckboxId" className="checkbox">
          <input
            type="checkbox"
            name="myCheckboxName"
            className="checkbox__input"
            id="myCheckboxId"
          />
          <div className="checkbox__box"></div>
          Keep me signed in
        </label>
      </div>
      <br />
      <br />
    </div>
  );
};

export default Login;
