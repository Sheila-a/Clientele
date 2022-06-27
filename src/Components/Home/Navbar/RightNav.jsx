import React from "react";
import "./Navbar.css";
import styled from "styled-components";
import { Link } from "react-router-dom";

const UL = styled.div`
  @media (min-width: 320px) and (max-width: 430px) {
    display: flex;
    flex-direction: column;
    flex-flow: column nowrap;
    background-color: #174b47;
    margin-top: 4.5vh;
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 25vh;
    transition: transform 0.3s ease-in-out;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    padding-top: 5vh;

    p {
      padding: 2.5vh 0vh 2.5vh 1vh;
      width: 203px;
      color: white;
    }

    p:hover {
      background: #367c77;
    }

    div {
      flex-direction: column;
      text-align: left;
      flex-flow: column nowrap;
    }

    .span {
      margin-left: 2vh;
      margin-top: 0;
      box-shadow: #bae4e0 1.95px 1.95px 2.6px;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <UL open={open}>
      <div className="NavChild11">
        <div className="dropdown">
          <p className="NavChildList">About Us</p>
          <div className="dropdown-content span">
            <div className="DList">
              <Link to="/meet-our-doctor">Meet Our Doctor</Link>
            </div>
            <div className="DList">
              <Link to="/meet-our-staff">Meet the Staff</Link>
            </div>
            <div className="DList">
              <Link to="/community-events">Community events</Link>
            </div>
          </div>
        </div>

        <div className="dropdown">
          <p className="NavChildList">Our Services</p>
          <div className="dropdown-content span">
            <div className="DList">
              <Link to="/consultation">Consultation</Link>
            </div>
            <div className="DList">
              <Link to="/diagnosis">Diagnosis</Link>
            </div>
            <div className="DList">
              <Link to="/for-doctors">For Doctors</Link>
            </div>
            <div className="DList">
              <Link to="/homeopathy">Homeopathy</Link>
            </div>
            <div className="DList">
              <Link to="/physical-therapy">Physical Therapy</Link>
            </div>
            <div className="DList">
              <Link to="/career">Career</Link>
            </div>
          </div>
        </div>

        <Link to="/covid-19-policy">
          <p className="NavChildList">Covid-19 Policy</p>
        </Link>

        <Link to="/contact">
          <p className="NavChildList NCL">Contact Us</p>
        </Link>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        {/* <p>Welcome</p> */}
      </div>
    </UL>
  );
};

export default RightNav;
