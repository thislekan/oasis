import React from "react";
import { Link } from "react-router-dom";

const ContactUs = () => (
  <div className="contact-card">
    <div className="contact-card__wrapper">
      <div className="contact-card__header">
        <h4>Complaints</h4>
      </div>
      <div className="contact-card__body">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus,
          velit! Consequuntur neque, deleniti expedita magni ea a id iste
          laborum facilis quibusdam totam. Quidem est voluptate voluptatum
          ipsam. Ullam, repellat!
        </p>
      </div>
      <div className="contact-card__footer">
        <Link to="/" className="link-btn">
          Complains?
        </Link>
      </div>
    </div>
  </div>
);

export default ContactUs;
