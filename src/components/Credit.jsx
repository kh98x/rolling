import React from "react";
import Title from "./Title";

class Credit extends React.Component {
  displayImg = () => {
    const allItems = [...this.props.items];
    const newPicArr = [];
    for (let cur of allItems) {
      for (let val in cur) {
        newPicArr.push(
          <li key={cur[val].id}>
            <a href={cur[val].image} target="blank">
              <img
                style={{ width: "12em", height: "10em" }}
                src={cur[val].image}
                alt={cur[val].name}
              />
            </a>
          </li>
        );
      }
    }
    return newPicArr;
  };

  render() {
    return (
      <div className="pad-top mx-auto">
        <Title title="Credit" />
        <div className="m-5">
          <h4 className="text-center m-5">
            Thanks to the all the photographers at{" "}
            <a href="https://www.unsplash.com" alt="unsplash" target="blank">
              unsplash <i className="fas fa-camera" />
            </a>{" "}
            for their amazing photos
          </h4>
          <ul className="d-flex flex-wrap m-1">
            {this.displayImg().map(item => item)}
          </ul>
        </div>
      </div>
    );
  }
}

export default Credit;
