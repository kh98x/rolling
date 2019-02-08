import React, { Component } from "react";
import Title from "./titles";
import Map from "./map";

class About extends Component {
  render() {
    return (
      <div id="about-main" className="bg-secondary">
        <div
          id="about-1"
          className="bg-secondary
    "
        >
          <h1 className="about-title">About</h1>
          <p>Nutritional information is available upon requests</p>
          <p>Store hours: 10:30AM - 9:00PM Daily</p>
          <p>Friendly reminder: Payment accepted in cash only</p>
        </div>
        <Map id="about-2" />
      </div>
    );
  }
}

export default About;
