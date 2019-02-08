import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Dropdown extends React.Component {
  state = {
    isOpen: false
  };
  toggleOpen = () => {
    this.setState({ isOpen: !this.state.isOpen });
    console.log("clicked");
  };

  render() {
    const { totalItems, yourOrder } = this.props;

    const menuClass = `dropdown-menu${this.state.isOpen ? " show" : ""}`;

    return (
      <div className="dropdown" onClick={this.toggleOpen}>
        <button
          className="btn btn-danger dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
        >
          <FontAwesomeIcon className="nav-cart-button" icon="cart-arrow-down" />
        </button>
        <div className={menuClass} aria-labelledby="dropdownMenuButton">
          {totalItems > 0
            ? yourOrder.map(each => (
                <li key={each.id}>
                  {each.name} ${each.price} {each.value} item total: $
                  {(each.price * each.value).toFixed(2)}
                </li>
              ))
            : "Your cart is empty..."}
        </div>
      </div>
    );
  }
}

export default Dropdown;
