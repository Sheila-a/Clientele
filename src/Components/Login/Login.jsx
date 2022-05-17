import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="Login">
      <div className="topper"></div>

      <div className="bodyy">
        <form action="">
          <div className="main-form">
            <h3 className="title">Email/Card Number</h3>
            <input
              type="email"
              placeholder="Enter Email or Card Number"
              required
              className="input"
            />
            <h3 className="title">Password</h3>
            <input
              type="password"
              placeholder="Enter password"
              required
              className="input"
            />
          </div>

          <div className="checkbox">
            <label htmlFor="Remember" className="agree">
              <input type="checkbox" className="checker" />
            </label>
            <div className="Remb">Remember me</div>
          </div>
          <button className="btn">Login</button>
        </form>
        <div class="light x1"></div>
        <div class="light x2"></div>
        <div class="light x3"></div>
        <div class="light x4"></div>
        <div class="light x5"></div>
        <div class="light x6"></div>
        <div class="light x7"></div>
        <div class="light x8"></div>
        <div class="light x9"></div>
      </div>

      <footer>
        <div className="footers"></div>
      </footer>
    </div>
  );
};

export default Login;
