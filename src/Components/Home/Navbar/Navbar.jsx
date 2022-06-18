import "./Navbar.css";
import Search from "../../../Images/search.png";
import { Link } from "react-router-dom";
import Burger from "./Burger";

const Navbar = ({ open }) => {
  return (
    <div className="Nav" data-aos="fade-down" data-aos-duration="1000">
      <div className="Navbar">
        <p className="NavCon">
          <Link to="/login">Login</Link>
        </p>
        <p className="NavCon">
          <Link to="/register">Register</Link>
        </p>
      </div>
      <div className="NavChild">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          fill="currentColor"
          className="bi bi-boxes"
          viewBox="0 0 16 16"
        >
          <Link to="/">
            <path d="M7.752.066a.5.5 0 0 1 .496 0l3.75 2.143a.5.5 0 0 1 .252.434v3.995l3.498 2A.5.5 0 0 1 16 9.07v4.286a.5.5 0 0 1-.252.434l-3.75 2.143a.5.5 0 0 1-.496 0l-3.502-2-3.502 2.001a.5.5 0 0 1-.496 0l-3.75-2.143A.5.5 0 0 1 0 13.357V9.071a.5.5 0 0 1 .252-.434L3.75 6.638V2.643a.5.5 0 0 1 .252-.434L7.752.066ZM4.25 7.504 1.508 9.071l2.742 1.567 2.742-1.567L4.25 7.504ZM7.5 9.933l-2.75 1.571v3.134l2.75-1.571V9.933Zm1 3.134 2.75 1.571v-3.134L8.5 9.933v3.134Zm.508-3.996 2.742 1.567 2.742-1.567-2.742-1.567-2.742 1.567Zm2.242-2.433V3.504L8.5 5.076V8.21l2.75-1.572ZM7.5 8.21V5.076L4.75 3.504v3.134L7.5 8.21ZM5.258 2.643 8 4.21l2.742-1.567L8 1.076 5.258 2.643ZM15 9.933l-2.75 1.571v3.134L15 13.067V9.933ZM3.75 14.638v-3.134L1 9.933v3.134l2.75 1.571Z" />
          </Link>
        </svg>

        <h2 className="NavChild1">MARIAN HOMEOPATHIC SANATORIUM</h2>
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
        <p>
          <Link to="">
            <img src={Search} alt="" className="Search" />
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Navbar;
