import React from "react";
import Navbar from "../../../Home/Navbar/Navbar";
import "./Homeopathy.css";
import Footer from "../../../Home/Footer/footer";

const Homeopathy = () => {
  return (
    <div className="HOMEO">
      <Navbar />
      <div className="homeo">
        <br />
        <br />
        <h1 className="homeo-mega-title">ABOUT HOMEOPTAHY</h1>
        <br />
        <br />
        <br />
        <div className="homeo-origin">
          <h2 className="homeo-title">WHAT IS HOMEOPATHY ?</h2>
          <br />
          <p className="homeo-text">
            {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos totam
            ut at a doloribus placeat magnam. Expedita, sapiente necessitatibus?
            Enim ipsa maiores dolorum dignissimos incidunt ea. Fugit praesentium
            voluptate mollitia explicabo accusamus numquam voluptatum optio
            totam sapiente qui non iusto, a blanditiis est atque nisi cum veniam
            assumenda soluta unde! */}
            Homeopathy is a specialized system of treatment developed by Dr
            Samuel Christian Friedrich Hahnemann. It is based on the natural law
            of healing which is entirely aimed at restoring the altered harmony
            between the Trinity of life i.e the body, mind and life energy.
          </p>
        </div>
        <br />
        <br />
        <div className="homeo-origin-1">
          <h2 className="homeo-title">ORIGIN OF HOMEOPATHY</h2>
          <br />
          <p className="homeo-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum rem
            accusamus amet laboriosam recusandae, illo expedita alias in
            delectus, asperiores iste, deserunt officiis rerum voluptatibus
            iusto! Facilis nihil quas sit praesentium voluptas repellat ullam
            dolore facere non cupiditate, eos fugit dolores quia ab debitis eius
            quam modi quidem dolorem ratione odio, odit minus vero corrupti!
          </p>
        </div>
        <br />
        <br />
        <div className="homeo-origin-2">
          <h2 className="homeo-title">WHY HOMEOPATHY</h2>
          <br />
          <p className="homeo-text">
            {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            inventore, expedita excepturi eveniet voluptates explicabo ex autem?
            Deleniti, laborum veritatis ipsa cumque perspiciatis, minus unde
            animi reprehenderit explicabo eius inventore deserunt beatae earum
            nobis praesentium. Repellat, dolore ab reprehenderit obcaecati
            pariatur omnis eveniet placeat earum. */}
            We chose homeopathic treatment because the early exposure to
            pathologic agents like bacteria and viruses for instance help prime
            the immune system and homeopathic treatment helps to ward off the
            infections.
          </p>
        </div>
        <br />
        <br />
        <div className="homeo-origin-3">
          <h2 className="homeo-title">WHAT IS A REMEDY?</h2>
          <br />
          <p className="homeo-text">
            {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            inventore, expedita excepturi eveniet voluptates explicabo ex autem?
            Deleniti, laborum veritatis ipsa cumque perspiciatis, minus unde
            animi reprehenderit explicabo eius inventore deserunt beatae earum
            nobis praesentium. Repellat, dolore ab reprehenderit obcaecati
            pariatur omnis eveniet placeat earum. */}
            It is a medicine which can permanently cure any disease. A remedy is
            a medicine which becomes specific to a particular case of disease
            and becomes curative in that particular disease on the basis of
            definite pathological relation of symptoms - similarity.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Homeopathy;
