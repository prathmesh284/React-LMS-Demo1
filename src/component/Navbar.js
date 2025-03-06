import React from "react";
import Logo from "../images/GeeksForGeeks_logo.png";
import "./Navbar.css";
import {FaSearch,FaRegBell, FaRegMoon, FaLanguage} from "react-icons/fa";


export function Divider() {
  return (
    <div className='divider'>
    </div>
  )
}

export default function Navbar() {
  return (
    <div>
    <div className="navbar">
      <div className="navbar-menu">
        <div className="menu">
          <a href="#">Cources</a>
        </div>
        <div className="menu">
          <a href="#">Tutorials</a>
        </div>
        <div className="menu">
          <a href="#">Java</a>
        </div>
        <div className="menu">
          <a href="#">Practice</a>
        </div>
        <div className="menu">
          <a href="#">Contests</a>
        </div>
      </div>
      <img src={Logo} alt="logo" className="navbar-logo" />
      <div className="navbar-menu">
        <div className="menu">
          <a href="#">
            <FaSearch size={20} color="black" />
          </a>
        </div>
        <div className="menu">
          <a href="#">
            <FaRegMoon size={20} color="black"/>
          </a>
        </div>
        <div className="menu">
          <a href="#">
            <FaRegBell size={20} color="grey" />
          </a>
        </div>
        <div className="menu">
          <a href="#">
            <FaLanguage size={25} color="black" />
          </a>
        </div>
        <div className="menu">
          <button className="btn">Sign In</button>
        </div>
      </div>
    </div>

    <Divider />
    </div>
  );
}
