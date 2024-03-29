import React from "react";
import "./Consultation.css";
import Navbar from "../../../Home/Navbar/Navbar";
import Footer from "../../../Home/Footer/footer";
import { Link } from "react-router-dom";

const Counselling = () => {
  return (
    <div className="">
      <Navbar />
      <div className="Cons">
        <div className="Cons-text">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad error
            numquam consectetur laborum facere dolores reprehenderit laboriosam?
            Labore, perferendis? Voluptatibus.
          </p>
          <p>Wanna book an Appointment?</p>
          <br />
          <p>
            Click on the button below and choose counselling in the dropdown
          </p>
          <button className="consult-btn">
            <Link to="/book-an-appointment">
              Book an Appointment <span className="fas fa-chevron-right"></span>
            </Link>
          </button>
        </div>
        {/* <div className="forma">
          <form action="">
            <h4>Prefix</h4>
            <br />
            <select name="" className="Cons-select">
              <option value="" selected="selected">
                - Select -
              </option>
              <option value="">Ms</option>
              <option value="">Mr</option>
              <option value="">Mrs</option>
              <option value="">Barr</option>
              <option value="">Engr</option>
              <option value="">Prof</option>
            </select>
            <br />
            <br />
            <br />

            <h4>Full Name</h4>
            <br />
            <div className="Cons-name">
              <input type="text" className="Cons-input" />
              <input type="text" className="Cons-input" />
            </div>
            <div className="Cons-name">
              <p className="firstname">First Name</p>
              <p className="lastname">Last Name</p>
            </div>
            <br />
            <br />
            <br />

            <h4>Gender</h4>
            <br />
            <select name="" id="" className="Cons-select">
              <option value="" selected="selected">
                - Select -
              </option>
              <option value="">Male</option>
              <option value="">Female</option>
              <option value="">Rather not Say</option>
            </select>
            <br />
            <br />
            <br />

            <p>Phone Number</p>
            <br />
            <div className="Cons-name">
              <input type="text" className="Cons-input" />
              <input type="text" className="Cons-input" />
            </div>
            <div className="Cons-name">
              <p className="firstname">Area Code</p>
              <p className="lastname">Phone Number</p>
            </div>
            <br />
            <br />
            <br />

            <div className="Cons-name-1">
              <div>
                <p>E-mail</p>
                <br />
                <input type="email" className="Cons-input-1" />
                <br />
                <br />
                <br />
              </div>
              <div>
                <p>Company or Organization Name</p>
                <br />
                <input type="text" className="Cons-input-1" />
                <br />
                <br />
                <br />
              </div>
            </div>

            <br />
            <br />
            <hr />
            <br />

            <p>Consultation Interest</p>
            <br />
            <select name="" id="" className="Cons-select">
              <option value="" selected="selected">
                - Select -
              </option>
              <option value="">Emergency</option>
              <option value="">Check Up</option>
              <option value=""></option>
            </select>
            <br />
            <br />
            <br />

            <p>Please select Appointment Date & Time</p>
            <br />
            <input type="date" />
            <br />
            <br />
            <br />

            <p>Additional Information</p>
            <br />
            <textarea name="" id="" cols="50" rows="10"></textarea>
            <br />
            <br />
            <br />

            <div>
              <button>Book your Appointment Now !</button>
            </div>
          </form>
        </div> */}
      </div>
      <Footer />
    </div>
  );
};

export default Counselling;
