import React from "react";
import "./Career.css";
import "./Career";
import Navbar from "../../../Navbar/Navbar";
import Footer from "../../../Footer/footer";
import HIRE from "../../../../Images/we-are-hiring.png";
import HIRE2 from "../../../../Images/hiring.png";

const Career = () => {
  // const selector = document.querySelector(".career-selector");

  // selector.addEventListener("change", (e) => {
  //   console.log("changed", e.target.value);
  // });

  // selector.addEventListener("mousedown", (e) => {
  //   if (window.innerWidth >= 420) {
  //     e.preventDefault();

  //     const select = selector.children[0];
  //     const dropDown = document.createElement("ul");
  //     dropDown.className = "selector-options";

  //     [...select.children].forEach((option) => {
  //       const dropDownOption = document.createElement("li");
  //       dropDownOption.textContent = option.textContent;

  //       dropDownOption.addEventListener("mousedown", (e) => {
  //         e.stopPropagation();
  //         select.value = option.value;
  //         selector.value = option.value;
  //       });
  //     });
  //   }
  // });
  return (
    <div>
      <Navbar />
      <div className="career">
        <div className="career-intro">
          <h1 className="openings">OPENINGS !</h1>
          <img src={HIRE} alt="" className="hiring" />
          <p className="career-intro-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            eligendi distinctio reprehenderit autem ea. Iure perferendis
            provident eligendi vel voluptates cum ad, adipisci odio magni esse
            omnis soluta veritatis porro totam ducimus asperiores quae assumenda
            impedit! Tenetur illo error ex quod. Sapiente qui, minus possimus
            ipsa quas doloribus cum corporis!
          </p>
          <p>Fill out form below...</p>
        </div>
        <br />
        <div className="career-form-div">
          <form action="" className="career-form">
            <h4 className="career-title">Full Name</h4>
            <input
              type="text"
              placeholder="Enter Full Name"
              required
              className="career-input"
            />
            <br />
            <br />
            <h4 className="career-title">Age</h4>
            <label htmlFor="" className="career-selector">
              <select name="" id="" className="career-select">
                <option value="1" selected="selected" className="career-option">
                  - Select -
                </option>
                <option value="2" className="career-option">
                  18-24
                </option>
                <option value="3" className="career-option">
                  25-31
                </option>
                <option value="4" className="career-option">
                  31-40
                </option>
                <option value="5" className="career-option">
                  More than 40
                </option>
              </select>
            </label>
            <br />
            <br />
            <h4 className="career-title">Email</h4>
            <input
              type="email"
              placeholder="Enter valid Email"
              required
              className="career-input"
            />
            <br />
            <br />
            <h4 className="career-title">Phone Number</h4>
            <input
              type="tel"
              placeholder="Enter Phone Num"
              required
              className="career-input"
            />
            <br />
            <br />
            <h4 className="career-title">Address</h4>
            <input
              type="text"
              placeholder="Enter valid Address"
              className="career-input"
            />
            <br />
            <br />

            <h4 className="career-title">Highest Education Qualification</h4>
            <div>
              <div>
                <label for="Higher-Certificate" className="Education">
                  <input type="radio" name="Qualifications" />
                  {/* Higher Certificate  */}
                  SSCE/WAEC
                </label>
              </div>

              <div>
                <label for="National-Diploma" className="Education">
                  <input type="radio" name="Qualifications" />
                  National Diploma
                </label>
              </div>
              <div>
                <label for="Bachelor's-Degree" className="Education">
                  <input type="radio" name="Qualifications" />
                  Bachelor's Degree
                </label>
              </div>
              <div>
                <label for="Honours-Degree" className="Education">
                  <input type="radio" name="Qualifications" />
                  Honours Degree
                </label>
              </div>
              <div>
                <label for="Master's-Degree" className="Education">
                  <input type="radio" name="Qualifications" />
                  Master's Degree
                </label>
                <div>
                  <label for="Doctoral-Degree" className="Education">
                    <input type="radio" name="Qualifications" />
                    Doctoral Degree
                  </label>
                </div>
              </div>
            </div>
            <br></br>
            <br></br>

            <h4 className="career-title">Job Title</h4>
            <label htmlFor="" className="career-selector">
              <select name="" id="">
                <option value="" selected="selected">
                  - Select -
                </option>
                <option value="">Nurse</option>
                <option value="">Doctor</option>
                <option value="">Lab Attendant</option>
                <option value="">Driver</option>
                <option value="">Security Personnel</option>
                <option value="">Dietician</option>
                <option value="">Secretary</option>
                <option value="">Tech Personnel</option>
              </select>
            </label>
            <br />
            <br />

            <h4 className="career-title">Are you available to move ?</h4>
            <div>
              <div>
                <label for="Yes" className="Avail">
                  <input type="radio" name="Available" />
                  Yes
                </label>
              </div>

              <div>
                <label for="No" className="Avail">
                  <input type="radio" name="Available" />
                  No
                </label>
              </div>
            </div>
            <br />

            <h4 className="career-title">Upload Resume</h4>
            <input
              type="file"
              id="myFile"
              name="filename"
              required
              accept="image/*"
            />
            <br />
            <br />

            <h4 className="career-title">Upload Cover Letter</h4>
            <input type="file" id="myFile" name="filename" accept="pdf/*" />
            <br />
            <br />
            {/* <h4>Why are you the best Candidate for th job?</h4> */}
            <h4 className="career-title">Why should we hire you ?</h4>

            <textarea
              name=""
              id=""
              cols="30"
              rows="5"
              maxLength="200"
              className="career-input"
            ></textarea>
            <p className="reduce">
              <em>(Max of 200 char)</em>
            </p>
          </form>
          <div className="career-form-right">
            <img src={HIRE2} alt="" className="hiring2" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Career;
