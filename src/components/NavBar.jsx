import React from "react";
import Dropdown from "./dropDown";
import { Link } from "react-router-dom";

const NavBar = ({ totalItems, yourOrder, onAdd, onSubtract }) => {
  return (
    <nav className="fixed-top navbar navbar-expand-xl navbar-light bg-danger">
      <Link className="navbar-brand btn btn-muted text-white px-5" to="/">
        <strong>Rolling Wok</strong>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#mobile-nav"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse px-5" id="mobile-nav">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item">
            <Link to="/menu" className="btn btn-danger px-5">
              Menu
            </Link>
          </li>
          <li className="nav-item">
            <Link className="btn btn-danger px-5" to="/about">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link className="btn btn-danger px-5" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
        <div>
          <Dropdown
            totalItems={totalItems}
            yourOrder={yourOrder}
            onAdd={onAdd}
            onSubtract={onSubtract}
          />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
