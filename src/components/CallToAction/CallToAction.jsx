import React from "react";
import "./callToAction.css";
import MobileMockup from "../../images/calltoaction/Mobile-Mockup.svg";
import Ellipse from "../../images/calltoaction/Ellipse.svg";
const CallToAction = () => {
  return (
    <>
      <section className="section-calltoaction">
        <div className="principal-container">
          <div className="container-image-phone">
            <img className="Ellipse" src={Ellipse} alt="Ellipse" />
            <img
              className="MobileMockup"
              src={MobileMockup}
              alt="mobilemockup"
            />
          </div>
          <div className="container-description-phone">
            <h1>Get SunSet Today!</h1>
            <p>Be prepared for any weather event with out alerts.</p>
            <button className="button">DOWNLOAD NOW</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default CallToAction;
