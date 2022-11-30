import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import IconGroup from "../../components/header/IconGroup";
import { useSelector } from "react-redux";


export default function Navbar() {
  const user = useSelector(state => state.authUser.user)
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
          {user.email.includes("admin") && <Link to="aboutus">About Us</Link>}
        </div>
      </li>
      <li className="navBar-list">
        <div className=" navBar-item">
          {user.email.includes("admin") && <Link to="aboutus">About US</Link>}
          <Link to="contactus">Contact Us</Link>
        </div>
      </li>
      <IconGroup/>
    </div>
  );
}
