import React, { Component } from "react";
import Title from "./Title";

class Checkout extends Component {
  renderModal = () => {
    return <button>Continue</button>;
  };

  subTotal = () => {
    return this.props.yourOrder
      .map(each => each.value * each.price.toFixed(2))
      .map(Number)
      .reduce((x, y) => x + y);
  };

  render() {
    return (
      <div className="pad-top">
        <Title title="Checkout" />
        <div
          className="modal fade"
          id="exampleModalCenter"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">
                  Currently Unavailable
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                Sorry for the inconvenience, we currently do not accept online
                payments.
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <h2 className="card-title text-center m-2 p-2">Your Order Review</h2>
          <div className="card-text">
            <ol className="d-flex flex-wrap row">
              {this.props.yourOrder.map(el => {
                return (
                  <li
                    key={el.name}
                    className="m-4 p-4"
                    style={{ fontSize: "1.5em" }}
                  >
                    <img
                      src={el.image}
                      alt={el.name}
                      className="img-fluid p-1 m-1"
                      style={{ maxWidth: "4em", maxHeight: "3em" }}
                    />
                    <span className="row ubuntu m-1">
                      <span className="mx-1">
                        <strong>{el.name}:</strong>
                      </span>{" "}
                      {el.value} order{el.value > 1 ? "s" : ""} for{" "}
                      {(el.value * el.price).toFixed(2)}
                    </span>
                    <span className="m-1">
                      <button
                        className="btn btn-success p-1 m-1"
                        onClick={() => this.props.onAdd(el)}
                      >
                        <i className="fas fa-plus-circle" />
                      </button>
                      <button
                        className=" btn btn-warning text-white p-1 m-1"
                        onClick={() => this.props.onSubtract(el)}
                      >
                        <i className="fas fa-minus-circle" />
                      </button>
                      <button
                        className=" btn btn-danger p-1 m-1"
                        onClick={() => this.props.removeAllItems(el)}
                      >
                        <i className="fas fa-trash" />
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
                <div className="d-flex flex-column">
                  <span>{`Your subtotal: $ ${this.subTotal()} `}</span>
                  <button
                    type="button"
                    class="btn btn-primary mx-auto"
                    data-toggle="modal"
                    data-target="#exampleModalCenter"
                    style={{ width: "6em" }}
                  >
                    Checkout
                  </button>
                </div>
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
