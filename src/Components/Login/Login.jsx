import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Login.css";

const Login = () => {
  return (
    <div className="Login">
      <Navbar />
      <div className="Login-card">
        {/* <h4 className="login-txt">Email</h4> */}
        <input type="email" className="login-input" placeholder="Email" />
        <br />
        <br />
        <br />
        {/* <h4 className="login-txt">Password</h4> */}
        <input type="password" className="login-input" placeholder="Password" />
        <br />
        <br />
        <div className="login-checkbox">
          <input type="checkbox" className="login-chck" /> Keep me signed in
        </div>
        <br />
        <br />
        <button className="login-btn  ">Login</button>
        <br />
        <br />
        <br />
        <br />
      </div>
      <br />
      <br />
    </div>
  );
};

export default Login;
