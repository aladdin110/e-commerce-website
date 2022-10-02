import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div className="navbar">
      <li className="navBar-list">
        <div className=" navBar-item">
          <Link to="/">
            {" "}
            <img src="logo.png" height={50} width={50} alt="logo" />
          </Link>
        </div>
      </li>
      <li className="navBar-list">
        <div className=" navBar-item">
          <Link to="/">Home</Link>
        </div>
      </li>
      <li className="navBar-list">
        <div className=" navBar-item">
          <Link to="shop">Shop</Link>
        </div>
      </li>
      <li className="navBar-list">
        <div className=" navBar-item">
          <Link to="aboutus">About US</Link>
        </div>
      </li>
    </div>
  );
}
