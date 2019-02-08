import React, { Component } from "react";
import Title from "./titles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  fab,
  faInstagram,
  faYelp,
  faPhone,
  faEnvelope
} from "@fortawesome/free-brands-svg-icons";

class Contact extends Component {
  render() {
    return (
      <div
        className="contact bg-danger
      "
      >
        <div id="contact">
          <h1 className="contact-item">Contact</h1>
        </div>
        <div>
          <a href="https://www.instagram.com/wok.rolling/" target="blank">
            <FontAwesomeIcon
              className="contact-item"
              icon={["fab", "instagram"]}
              size="3x"
            />
          </a>
          <a
            href="https://www.yelp.com/biz/rolling-wok-rowland-heights"
            target="blank"
          >
            <FontAwesomeIcon
              className="contact-item"
              icon={["fab", "yelp"]}
              size="3x"
            />
          </a>
          <a href="tel:6268397574">
            <FontAwesomeIcon className="contact-item" icon="phone" size="3x" />
          </a>
          <a href="mailto:wok.rolling@gmail.com" target="blank">
            <FontAwesomeIcon
              className="contact-item"
              icon="envelope"
              size="3x"
            />
          </a>
        </div>
      </div>
    );
  }
}

export default Contact;
