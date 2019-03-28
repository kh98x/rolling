import React, { Component } from "react";
import Map from "./map";
import YelpReviewDisplay from "./YelpReviewDisplay";
import Title from "./Title";

class About extends Component {
  displayAboutItem = (title, text, icon) => {
    return (
      <div
        className="card m-2"
        style={{ width: "10em", fontSize: "1.5em", height: "10em" }}
      >
        <div className="card-body">
          <i className={icon} />
          <div className="card-title">{title}</div>
          <p className="card-text text-muted" style={{ fontSize: "18px" }}>
            {text}
          </p>
        </div>
      </div>
    );
  };

  render() {
    return (
      <div className="pad-top bg-muted ubuntu">
        <Title title="About" />
        <div className="d-flex flex-column">
          <div className="row justify-content-center">
            <div>
              {this.displayAboutItem(
                "Delicious",
                "Perfect amount of flavor per bite. Nothing more, nothing less.",
                "fas fa-grin-tongue"
              )}
            </div>
            <div>
              {" "}
              {this.displayAboutItem(
                "Affordable",
                "Keep your wallet and your stomach happy with our affordable prices",
                "fas fa-dollar-sign"
              )}
            </div>
            <div className="">
              {this.displayAboutItem(
                "Fresh",
                "We use local and freshs ingredients daily",
                "fas fa-seedling"
              )}
            </div>
          </div>
          {/* Store info */}
          <div className="row justify-content-center">
            <div>
              {this.displayAboutItem(
                "Store Hours",
                "Open from 10:30am - 9:00pm daily",
                "far fa-clock"
              )}
            </div>
            <div>
              {" "}
              {this.displayAboutItem(
                "Payments",
                "Cash only, passing the savings to you!",
                "fas fa-money-bill"
              )}
            </div>
            <div className="">
              {this.displayAboutItem(
                "Delivery",
                "Currently unavailable",
                "far fa-times-circle"
              )}
            </div>
          </div>
        </div>
        <YelpReviewDisplay />
        <Title title="Directions" className="d-flex" />
        <div className="container d-flex justify-content-center">
          <Map />
        </div>
      </div>
    );
  }
}

export default About;
