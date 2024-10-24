import React from "react";
import abo from "../assets/feature.jpg";

function About() {
  return (
    <>
      <div className="container">
        <div className="cont">
          {" "}
          <div className="image-container">
            <img
              src={abo} // replace this with the actual image URL
              alt="Transport Boxes"
              className="image"
            />
          </div>
          <div className="content-container">
            <h4 className="subheading">ABOUT US</h4>
            <h2 className="heading">Quick Transport and Logistics Solutions</h2>
            <p className="paragraph">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
              diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
              lorem sit clita duo justo magna dolore erat amet.
            </p>
            <div className="features">
              <div className="feature-item">
                <h5>Global Coverage</h5>
                <p>
                  Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam
                  lorem diam justo.
                </p>
              </div>
              <div className="feature-item">
                <h5>On Time Delivery</h5>
                <p>
                  Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam
                  lorem diam justo.
                </p>
              </div>
            </div>
            <button className="button">Explore More</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
