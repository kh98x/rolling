import React, { Component } from "react";
import Title from "./Title";

class Checkout extends Component {
  subTotal = () => {
    return this.props.yourOrder
      .map(each => each.value * each.price.toFixed(2))
      .map(Number)
      .reduce((x, y) => x + y);
  };

  render() {
    console.log(this.props);
    return (
      <div className="pad-top">
        <Title title="Checkout" />
        <div className="card">
          <h2 className="card-title text-center m-2 p-2">Your Order</h2>
          <div className="card-text">
            <ol className="card container">
              {this.props.yourOrder.map(el => {
                return (
                  <li className="m-4 p-4" style={{ fontSize: "1.5em" }}>
                    <img
                      src={el.image}
                      alt={el.name}
                      className="img-fluid p-1 m-1"
                      style={{ maxWidth: "4em" }}
                    />
                    <span className="ubuntu m-5">
                      <span className="mx-5">
                        <strong>{el.name}:</strong>
                      </span>{" "}
                      {el.value} order{el.value > 1 ? "s" : ""} for{" "}
                      {(el.value * el.price).toFixed(2)}
                    </span>
                    <span className="m-5">
                      <button
                        className="btn btn-success p-1 m-1"
                        onClick={() => this.props.onAdd(el)}
                      >
                        <i className="fas fa-plus-circle" />
                      </button>
                      <button
                        className=" btn btn-danger p-1 m-1"
                        onClick={() => this.props.onSubtract(el)}
                      >
                        <i className="fas fa-minus-circle" />
                      </button>
                    </span>
                  </li>
                );
              })}
            </ol>
            <div
              className="card-title text-center"
              style={{ fontSize: "1.5em" }}
            >
              {this.props.yourOrder.length > 0 ? (
                `Your subtotal: $ ${this.subTotal()}`
              ) : (
                <span className="text-danger">Empty</span>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Checkout;
