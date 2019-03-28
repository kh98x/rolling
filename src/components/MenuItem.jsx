import React, { Component } from "react";

class MenuItem extends Component {
  render() {
    const { onAdd, onSubtract } = this.props;
    return (
      <div className="dflex flex-row">
        <div
          className="card text-center border-danger m-3 p-2 light-box-shadow"
          style={{ width: "24em" }}
        >
          <img
            className="card-img-top img-fluid"
            src={this.props.image}
            alt={this.props.name}
            style={{ maxHeight: "14em", maxWidth: "24em" }}
          />
          <div className="card-body">
            <h2 className="card-title">{this.props.name}</h2>
            <h4 className="card-text">{this.props.price}</h4>
            <p className="card-text">{this.props.description}</p>
            <div className="button-section">
              <button
                className="menu-button plus"
                type="button"
                data-toggle="modal"
                data-target="#displayActionNotice"
                onClick={() => onAdd(this.props)}
              >
                <i className="fas fa-plus-circle" />
              </button>

              <button
                className="menu-button minus"
                type="button"
                data-toggle="modal"
                data-target="#displayActionNotice"
                onClick={() => onSubtract(this.props)}
              >
                <i className="fas fa-minus-circle" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MenuItem;
