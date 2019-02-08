import React, { Component } from "react";
import Dropdown from "./dropDown";

const NavBar = ({ totalItems, yourOrder, isOpen, handleToggle }) => {
  return (
    <nav className="fixed-top navbar navbar-expand-xl navbar-light bg-danger">
      <a className="navbar-brand btn btn-muted px-5" href="#">
        Rolling Wok
      </a>
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
            <a className="btn btn-danger px-5" href="#">
              Menu
            </a>
          </li>
          <li className="nav-item">
            <a className="btn btn-danger px-5" href="#about">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="btn btn-danger px-5" href="#contact">
              Contact
            </a>
          </li>
        </ul>
        <div>
          <span className="badge badge-pill badge-danger">{totalItems}</span>
          <Dropdown totalItems={totalItems} yourOrder={yourOrder} />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
