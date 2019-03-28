import React from "react";
import { Link } from "react-router-dom";

const footerStyle = { height: "30vh" };

const Footer = () => {
  return (
    <div className="bg-danger" style={footerStyle}>
      <Link className="btn btn-danger" to="/menu">
        Menu
      </Link>
      <Link className="btn btn-danger" to="/about">
        About
      </Link>
      <Link className="btn btn-danger" to="/contact">
        Contact
      </Link>
      <Link className="btn btn-danger" to="/credit">
        Credit
      </Link>
      <p className="text-center">
        <i className="far fa-copyright py-3 my-5" />
        {new Date().getFullYear()} Rolling Wok
      </p>
    </div>
  );
};

export default Footer;
