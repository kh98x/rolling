import React, { Component } from "react";
import { Link } from "react-router-dom";

class Dropdown extends Component {
  quantityFormat = obj => {
    return obj.value > 1 ? "s" : "";
  };

  showEachOrderTotals = () => {
    return this.props.yourOrder.map(each => (
      <li key={each.id}>
        {each.name} for ${each.price} <br />
        {each.value} item{this.quantityFormat(each)} total: $
        {(each.price * each.value).toFixed(2)}
        {/* style the buttons */}
        {/* <div className="p-1 m-1">
          <button
            className="btn btn-success mx-2"
            onClick={() => {
              this.props.onAdd(each);
            }}
          >
            <i className="fas fa-plus-circle" />
          </button>
          <button
            className="btn btn-danger mx-2"
            onClick={() => this.props.onSubtract(each)}
          >
            <i className="fas fa-minus-circle" />
          </button>
        </div> */}
      </li>
    ));
  };

  subOrderTotal = () => {
    return this.props.yourOrder
      .map(el => {
        return (el.value * el.price).toFixed(2);
      })
      .map(Number)
      .reduce((acc, next) => {
        return acc + next;
      });
  };

  render() {
    const { totalItems } = this.props;

    return (
      <div className="dropleft">
        <div>
          <button
            className="btn btn-danger dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
          >
            <i className="nav-cart-button m-2" />
            <i className="fas fa-shopping-cart" />
            <span className="badge badge-pill badge-danger">{totalItems}</span>
          </button>
          <div
            className="dropdown-menu"
            aria-labelledby="dropdownMenuButton"
            style={{ width: "300px" }}
          >
            <div>
              {totalItems > 0 ? (
                <div>
                  <h3 className="m-2">Your order</h3>
                  <div className="scroll-container">
                    <ol>{this.showEachOrderTotals()}</ol>
                  </div>
                  <hr className="mx-2" />
                  <strong className="px-3">Subtotal:</strong>{" "}
                  <span className="mx-3">
                    <strong>{this.subOrderTotal().toFixed(2)}</strong>
                  </span>
                  <Link className="btn btn-info" to="/checkout">
                    <strong className="">Checkout</strong>
                  </Link>
                </div>
              ) : (
                <div>
                  <strong className="ml-3">Your cart is empty...</strong>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dropdown;
