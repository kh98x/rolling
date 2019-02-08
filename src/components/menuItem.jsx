import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class MenuItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { onAdd, onSubtract, items } = this.props;
    return (
      <div className="menu-item">
        <img className="menu-pic" src={this.props.image} alt="image" />
        <p>{this.props.name}</p>
        <p>{this.props.price}</p>
        <p>{this.props.description}</p>
        <div className="button-section">
          <button
            className="menu-button plus"
            onClick={() => onAdd(this.props)}
          >
            <FontAwesomeIcon icon="plus-circle" />
          </button>

          <button
            className="menu-button minus"
            onClick={() => onSubtract(this.props)}
          >
            <FontAwesomeIcon icon="minus-circle" />
          </button>
        </div>
      </div>
    );
  }
}

export default MenuItem;
