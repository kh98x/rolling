import React from "react";
import Title from "./Title";

const Contact = () => {
  return (
    <div className="pad-top">
      <div
        className="card bg-dark text-white text-shadow"
        style={{ filter: "grayscale(100%)" }}
      >
        <img
          src="https://images.unsplash.com/photo-1522346423789-1f8452345bf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80"
          className="img-fluid"
          alt="camera"
        />
        <div className="card-img-overlay">
          <Title title="Contact" />
          <div className="d-flex align-items-end flex-column bd-highlight m-4 p-3">
            <h2 className="card-title letter-space no-display">
              Check out our
              <a href="https://www.instagram.com/wok.rolling/" target="blank">
                <i
                  className="fab fa-instagram p-3 m-3 text-muted"
                  style={{ fontSize: "1.5em" }}
                />
              </a>
            </h2>
            <h4 className="card-text letter-space p-3 m-3 no-display">
              Share your photos and drop a comment!
            </h4>
            <h4 className="card-text letter-space p-3 m-3 no-display">
              No gram? No problem
            </h4>
            <h2 className="letter-space p-3 m-3 no-display">
              We also have
              <a
                href="https://www.yelp.com/biz/rolling-wok-rowland-heights"
                target="blank"
              >
                <i
                  className="fab fa-yelp text-muted pl-4"
                  style={{ fontSize: "1.5em" }}
                />
              </a>
            </h2>
          </div>
        </div>
      </div>
      <div className="contact bg-danger text-white p-1">
        <div id="contact">
          <h1 className="contact-item">
            Connect <i className="fas fa-arrow-right" />
          </h1>
        </div>
        <div className="d-flex">
          <div className="row">
            <a href="https://www.instagram.com/wok.rolling/" target="blank">
              <i
                className="contact-item fab fa-instagram text-white"
                size="3x"
              />
            </a>
            <a
              href="https://www.yelp.com/biz/rolling-wok-rowland-heights"
              target="blank"
            >
              <i className="contact-item fab fa-yelp text-white" size="3x" />
            </a>
            <a href="tel:6268397574">
              <i className="contact-item fas fa-phone text-white" size="3x" />
            </a>
            <a href="mailto:wok.rolling@gmail.com" target="blank">
              <i
                className="contact-item fas fa-envelope text-white"
                size="3x"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
