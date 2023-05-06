import React from "react";
import PhoneCallIcon from "../../images/contact-form/PhoneCall.svg";
import MailIcon from "../../images/contact-form/Mail.svg";
import UserIcon from "../../images/contact-form/User.svg";
import twitterIcon from "../../images/team/twitter-icon.svg";
import instagramIcon from "../../images/team/instagram-icon.svg";
import "./contactForm.css";
const ContactForm = () => {
  return (
    <>
      <section className="section-contact-form">
        <div className="container-contact-form">
          <div className="title-and-subtitle">
            <h1>Let’s get in touch!</h1>
            <p>
              Got questions about SunSet? Our team is here to help. Contact us
              for quick and friendly support.
            </p>
          </div>

          <div className="container-contact">
            <div className="container-contact-left">
              <div>
                <div className="contact">
                  <span>
                    <img src={PhoneCallIcon} alt="PhoneCallIcon" />
                  </span>
                  <p>+012 345 6789</p>
                </div>
                <div className="contact">
                  <span>
                    <img src={MailIcon} alt="MailIcon" />
                  </span>
                  <p>Hello@sunset.com</p>
                </div>
              </div>
              <div className="social-links-contact">
                <h1>Connect with us</h1>
                <div className="icons-social-links">
                  <img src={twitterIcon} alt="twitterIcon" />
                  <img src={instagramIcon} alt="instagramIcon" />
                </div>
              </div>
            </div>

            <form className="container-contact-right">
              <div className="input-container">
                <img src={UserIcon} alt="UserIcon" />
                <span></span>
                <input type="text" placeholder="Full Name" />
              </div>
              <div className="input-container">
                <img className="mail" src={MailIcon} alt="MailIcon" />
                <span></span>
                <input type="text" placeholder="Email" />
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactForm;
