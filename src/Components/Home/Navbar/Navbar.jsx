import "./Navbar.css";
import LOGO from "../../../Images/LOGO.png";
import { Link } from "react-router-dom";
import Burger from "./Burger";

const Navbar = ({ open }) => {
  return (
    <div className="Nav" data-aos="fade-down" data-aos-duration="1000">
      <div className="Navbar">
        {/* <p className="NavCon">
          <Link to="/login">Login</Link>
        </p> */}
        {/* <p className="NavCon">
          <Link to="/register">Register</Link>
        </p> */}
        <p className="Navtrial">
          <Link to="/register">Register</Link>
        </p>
      </div>
      <div className="NavChild">
        <Link to="/">
          <img src={LOGO} alt="" className="LOGO" />
        </Link>

        <Link to="/">
          <h2 className="NavChild1">
            MARIAN <span>HOMEOPATHIC</span> SANATORIUM
          </h2>
        </Link>

        <Link to="/">
          <h2 className="NavChild1hide">
            M <span> H </span>S
          </h2>
        </Link>
        <Burger />

        {/* <div className="NavChild11">
          <div className="dropdown">
            <p className="NavChildList">About Us</p>
            <div className="dropdown-content">
              <div className="DList">
                <Link to="/about">Meet Our Doctor</Link>
              </div>
              <div className="DList">
                <Link to="">Meet the Staff</Link>
              </div>
              <div className="DList">
                <Link to="/about">Community events</Link>
              </div>
            </div>
          </div>

          <div className="dropdown">
            <p className="NavChildList">Our Services</p>
            <div className="dropdown-content">
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

          <Link to="/our-services">
            <p className="NavChildList">Covid-19 Policy</p>
          </Link>

          <Link to="/contact">
            <p className="NavChildList NCL">Contact Us</p>
          </Link>
          
        </div> */}
        {/* <p>
          <Link to="">
            <img src={Search} alt="" className="Search" />
          </Link>
        </p> */}
      </div>
    </div>
  );
};

export default Navbar;
