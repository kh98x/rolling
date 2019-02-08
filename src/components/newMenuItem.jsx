import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class NewMenuItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { onAdd, onSubtract, items } = this.props;
    return (
      <div className="new-menu-item">
        <img className="new-menu-pic" src={this.props.image} alt="image" />
        <p>{this.props.name}</p>
        <p>{this.props.price}</p>
        {/* <p>{this.props.description}</p> */}
      </div>
    );
  }
}

export default NewMenuItem;
