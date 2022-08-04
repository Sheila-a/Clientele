// import React from "react";
// import "./footer.css";
// import FB from "../../../Images/FB.png";
// import IG from "../../../Images/IG.png";
// import YT from "../../../Images/YT.png";
// import TW from "../../../Images/twitter.png";
// import { Link } from "react-router-dom";
// import { Container, Row, Col } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import styled from "styled-components";

// const Footers = () => {
//   return (
//     <div className="tog">
//       <div className="bottom-container BC-CAR">
//         <div className="bottom-flex">
//           <div className="bottom-flex-MQ">
//             <div className="bf1">
//               <h3 className="footer-h3"> MHS</h3>
//               <div className="footer-p footer-pS">
//                 <p>See a Doctor</p>
//                 <p>Submit Sample</p>
//                 <p>
//                   <Link to="/career"> Work for Us</Link>
//                 </p>
//                 <p>Contact</p>
//                 <p>Terms and Condition</p>
//               </div>
//             </div>
//             <div className="bf2">
//               <h3 className="footer-h3">Support</h3>
//               <div className="footer-p footer-pS">
//                 <p> Help </p>
//                 <p> FAQs</p>
//                 <p> Help </p>
//                 <p> FAQs</p>
//               </div>
//             </div>
//           </div>
//           <div className="bottom-flex-MQ">
//             <div className="bf3">
//               <h3 className="footer-h3">Resources</h3>

//               <div className="footer-p footer-pS">
//                 <p>Patient Resources</p>
//                 <p>Our Blog</p>
//                 <p>Educational</p>
//                 <p>Patient Resources</p>
//                 <p>Our Blog</p>
//                 <p>Educational</p>
//               </div>
//             </div>
//             <div className="bf4">
//               <div>
//                 <h3 className="footer-h3">Follow Us</h3>
//                 <img
//                   src={FB}
//                   alt=""
//                   className="footer-icn foot-inc
//               "
//                 />
//                 <img
//                   src={YT}
//                   alt=""
//                   className="footer-icn yt foot-inc
//               "
//                 />{" "}
//                 <img
//                   src={IG}
//                   alt=""
//                   className="footer-icn foot-inc
//               "
//                 />
//                 <img
//                   src={TW}
//                   alt=""
//                   className="footer-icn yt foot-inc
//               "
//                 />
//               </div>
//               <br className="br-hide" />

//               <p className="footer-p foot-inc">
//                 2 GRA Enugu
//                 <br className="br-hide" />
//                 Enugu, Nigeria
//               </p>
//               <br className="br-hide" />
//               <p className="footer-p foot-inc">mhslimited@gmail.com</p>
//               <br className="br-hide" />
//               <p className="footer-p foot-inc">
//                 +234-908-345-7654, +234-810-654-765-8899
//               </p>
//             </div>
//           </div>
//         </div>
//         <div className="footer-hr"></div>
//         <p className="footer-note">
//           © 2022 Merien Hospitals. All rights reserved.
//         </p>
//       </div>
//       SECONDED
//       <Container>
//         <Row>
//           <Col className="text-center py-3">
//             © 2022 Merien Hospitals. All rights reserved.
//           </Col>
//         </Row>
//       </Container>

//       <FooterContainer className="main-footer">
//         <div className="footer-middle">
//           <div className="container">
//             <div className="row">
//               COL 1
//               <div className="col-md-3 col-sm-6">
//                 <h4>MHS</h4>
//                 <ul className="list-unstyled">
//                   <li>See a Doctor</li>
//                   <li>Submit Sample</li>
//                   <li>Work for Us</li>
//                   <li>Contact</li>
//                 </ul>
//               </div>
//               COL 2
//               <div className="col-md-3 col-sm-6">
//                 <h4>Support</h4>
//                 <ul className="list-unstyled">
//                   <li> Help</li>
//                   <li>FAQs</li>
//                 </ul>
//               </div>
//               COL 3
//               <div className="col-md-3 col-sm-6">
//                 <h4>Resources</h4>
//                 <ul className="list-unstyled">
//                   <li>Patient Resources</li>
//                   <li>Our Blog</li>
//                   <li>Educational</li>
//                 </ul>
//               </div>
//               COL 4
//               <div className="col-md-3 col-sm-6">
//                 <h4>Follow Us</h4>
//                 <img
//                 src={FB}
//                 alt=""
//                 className="footer-icn foot-inc
//               "
//               />
//               <img
//                 src={YT}
//                 alt=""
//                 className="footer-icn yt foot-inc
//               "
//               />{" "}
//               <img
//                 src={IG}
//                 alt=""
//                 className="footer-icn foot-inc
//               "
//               />
//               <img
//                 src={TW}
//                 alt=""
//                 className="footer-icn yt foot-inc
//               "
//               />
//                 <ul className="list-unstyled">
//                   <li> 2 GRA Enugu </li>
//                   <li> Enugu, Nigeria</li>
//                   <li>mhslimited@gmail.com</li>
//                   <li> +234-908-345-7654, +234-810-654-765-8899</li>
//                 </ul>
//               </div>
//             </div>{" "}
//             <Col className="text-xs-center  footer-bottom">
// © {new Date().getFullYear()} Merien Hospitals. All rights
// reserved.
//             </Col>
//           </div>
//         </div>
//       </FooterContainer>
//     </div>
//   );
// };

// export default Footers;
// const FooterContainer = styled.footer`
//   .footer-middle {
//     background: var(--mainDark);
//     padding-top: 3rem;
//     color: var(--mainWhite);
//   }

//   .footer-bottom {
//     padding-top: 3rem;
//     padding-bottom: 2rem;
//   }
// `;

import React from "react";
import Footer from "../../../Images/Footer2.png";

import FB from "../../../Images/FB.png";
import IG from "../../../Images/IG.png";
import YT from "../../../Images/YT.png";
import TW from "../../../Images/twitter.png";
import WH from "../../../Images/whatsapp2.png";
import LK from "../../../Images/linkedin.png";
import pin from "../../../Images/pin.png";
import gmail from "../../../Images/gmail1.png";
import phone from "../../../Images/telephone.png";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./footer.css";

const Footers = () => {
  // return (
  //   <div>
  //     <div class="container bottom-container">
  //       <footer class="py-5">
  //         <div class="row">
  //           <div class="col-2">
  //             <h5 className="footer-h5">MHS</h5>
  //             <ul class="nav flex-column">
  //               {" "}
  //               <li class="nav-item mb-2">
  //                 <a href="/" class="nav-link p-0 text-muted">
  //                   About
  //                 </a>
  //               </li>
  //               <li class="nav-item mb-2">
  //                 <a href="/" class="nav-link p-0 text-muted">
  //                   Work for Us
  //                 </a>
  //               </li>
  //               <li class="nav-item mb-2">
  //                 <a href="/" class="nav-link p-0 text-muted">
  //                   See a Doctor
  //                 </a>
  //               </li>
  //               <li class="nav-item mb-2">
  //                 <a href="/" class="nav-link p-0 text-muted">
  //                   Submit Sample
  //                 </a>
  //               </li>
  //             </ul>
  //           </div>

  //           <div class="col-2">
  //             <h5 className="footer-h5">Support</h5>
  //             <ul class="nav flex-column">
  //               <li class="nav-item mb-2">
  //                 <a href="/" class="nav-link p-0 text-muted">
  //                   Pricing
  //                 </a>
  //               </li>
  //               <li class="nav-item mb-2">
  //                 <a href="/" class="nav-link p-0 text-muted">
  //                   Help
  //                 </a>
  //               </li>
  //               <li class="nav-item mb-2">
  //                 <a href="/" class="nav-link p-0 text-muted">
  //                   FAQs
  //                 </a>
  //               </li>
  //             </ul>
  //           </div>

  //           <div class="col-2">
  //             <h5 className="footer-h5">Resources</h5>
  //             <ul class="nav flex-column">
  //               <li class="nav-item mb-2">
  //                 <a href="/" class="nav-link p-0 text-muted">
  //                   Our Blog
  //                 </a>
  //               </li>
  //               <li class="nav-item mb-2">
  //                 <a href="/" class="nav-link p-0 text-muted">
  //                   Educational
  //                 </a>
  //               </li>
  //               <li class="nav-item mb-2">
  //                 <a href="/" class="nav-link p-0 text-muted">
  //                   Patient Resources
  //                 </a>
  //               </li>
  //             </ul>
  //           </div>

  //           {/* <div class="col-4 offset-1">
  //             <form>
  //               <h5>Subscribe to our newsletter</h5>
  //               <p>Monthly digest of whats new and exciting from us.</p>
  //               <div class="d-flex w-100 gap-2">
  //                 <label for="newsletter1" class="visually-hidden">
  //                   Email address
  //                 </label>
  //                 <input
  //                   id="newsletter1"
  //                   type="text"
  //                   class="form-control"
  //                   placeholder="Email address"
  //                 />
  //                 <button class="btn btn-primary" type="button">
  //                   Subscribe
  //                 </button>
  //               </div>
  //             </form>
  //           </div> */}
  //         </div>

  //         <div class="d-flex justify-content-between py-4 my-4 border-top">
  //           <p>
  //             © {new Date().getFullYear()} Marian Homeopathic Sanatorium. All
  //             rights reserved.
  //           </p>
  //           <ul class="list-unstyled d-flex">
  //             <li class="ms-3">
  //               <a class="link-dark" href="/">
  //                 <svg class="bi" width="24" height="24">
  //                   {/* <use xlink:href="#twitter" /> */}
  //                   <img src={IG} alt="" className="footer-icn foot-inc" />
  //                 </svg>
  //               </a>
  //             </li>
  //             <li class="ms-3">
  //               <a class="link-dark" href="/">
  //                 <svg class="bi" width="24" height="24">
  //                   {/* <use xlink:href="#instagram" /> */}
  //                 </svg>
  //               </a>
  //             </li>
  //             <li class="ms-3">
  //               <a class="link-dark" href="/">
  //                 <svg class="bi" width="24" height="24">
  //                   {/* <use xlink:href="#facebook" /> */}
  //                 </svg>
  //               </a>
  //             </li>
  //           </ul>
  //         </div>
  //       </footer>
  //     </div>
  //   </div>
  // );
  return (
    <div>
      <div class="container bottom-container">
        <footer class="py-5">
          <div class="row">
            <div className="col-1">
              <img src={Footer} alt="" className="footer" />
            </div>
            <div class="col-2">
              <h5 className="footer-h5">MHS</h5>
              <div class="nav flex-column">
                <p class="nav-item mb-2">
                  <a href="/" class="nav-link p-0 text-muted">
                    About
                  </a>
                </p>
                <p class="nav-item mb-2">
                  <a href="/" class="nav-link p-0 text-muted">
                    Work for Us
                  </a>
                </p>
                <p class="nav-item mb-2">
                  <a href="/" class="nav-link p-0 text-muted">
                    See a Doctor
                  </a>
                </p>
                <p class="nav-item mb-2">
                  <a href="/" class="nav-link p-0 text-muted">
                    Submit Sample
                  </a>
                </p>
              </div>
            </div>

            <div class="col-2">
              <h5 className="footer-h5">Support</h5>
              <div class="nav flex-column">
                <p class="nav-item mb-2">
                  <a href="/" class="nav-link p-0 text-muted">
                    Pricing
                  </a>
                </p>
                <p class="nav-item mb-2">
                  <a href="/" class="nav-link p-0 text-muted">
                    Help
                  </a>
                </p>
                <p class="nav-item mb-2">
                  <a href="/" class="nav-link p-0 text-muted">
                    FAQs
                  </a>
                </p>
              </div>
            </div>

            <div class="col-2">
              <h5 className="footer-h5">Resources</h5>
              <div class="nav flex-column">
                <p class="nav-item mb-2">
                  <a href="/" class="nav-link p-0 text-muted">
                    Our Blog
                  </a>
                </p>
                <p class="nav-item mb-2">
                  <a href="/" class="nav-link p-0 text-muted">
                    Educational
                  </a>
                </p>
                <p class="nav-item mb-2">
                  <a href="/" class="nav-link p-0 text-muted">
                    Patient Resources
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="bf4">
            <h3 className="footer-h3">Follow Us</h3>
            <br />
            <div className="footer-icons">
              <img
                src={FB}
                alt=""
                className="footer-icn foot-inc
              "
              />
              <img
                src={WH}
                alt=""
                className="footer-icn foot-inc
              "
              />
              <img
                src={LK}
                alt=""
                className="footer-icn foot-inc
              "
              />
              <img
                src={YT}
                alt=""
                className="footer-icn yt foot-inc
               "
              />{" "}
              <img
                src={IG}
                alt=""
                className="footer-icn foot-inc
               "
              />
              <img
                src={TW}
                alt=""
                className="footer-icn yt foot-inc
               "
              />
            </div>
            <div className="showcase">
              <div className="footer-add">
                <p className="footer-p foot-inc">
                  <span>
                    <img src={pin} alt="" className="footer-mini-icon" />
                  </span>
                  No 1 Christ The King Church View Rd GRA Enugu, Nigeria
                </p>
              </div>{" "}
              <p className="footer-p foot-inc footer-add2 duo">
                <span>
                  <img src={gmail} alt="" className="footer-mini-icon " />
                </span>
                marianhomeopathicsanatorium@gmail.com
              </p>
              <p className="footer-p foot-inc footer-add3">
                <span>
                  <img src={phone} alt="" className="footer-mini-icon" />
                </span>
                +234-905-599-0627, +234-810-654-8899
              </p>{" "}
            </div>
          </div>

          <hr className="liner" />
          <div>
            <p className="rights">
              © {new Date().getFullYear()} Marian Homeopathic Sanatorium. All
              rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footers;
