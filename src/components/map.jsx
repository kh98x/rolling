import React, { Component } from "react";
import Media from "react-media";

// Ignoring DRY for now
const bigMapConfig = {
  float: "right",
  width: 600,
  height: 350,
  frameBorder: 0,
  border: 0,
  padding: "2em",
  allowFullScreen: true
};

const smallMapConfig = {
  float: "right",
  width: 400,
  height: 380,
  frameBorder: 0,
  border: 0,
  padding: "2em",
  allowFullScreen: true
};

class Map extends Component {
  render() {
    return (
      <div>
        <Media query={{ maxWidth: 569 }}>
          {matches =>
            matches ? (
              <main>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2654.534458491317!2d-117.90393888478658!3d33.989145280623106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xca49df05d0f8685!2sRolling+Wok!5e1!3m2!1sen!2sus!4v1548651864142"
                  style={smallMapConfig}
                />
              </main>
            ) : (
              <main>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2654.534458491317!2d-117.90393888478658!3d33.989145280623106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xca49df05d0f8685!2sRolling+Wok!5e1!3m2!1sen!2sus!4v1548651864142"
                  style={bigMapConfig}
                />
              </main>
            )
          }
        </Media>
      </div>
    );
  }
}

export default Map;
