import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navBar.css";
import logo from "../../assets/direction-sign.png";

const NavBar = () => {
  const [Toggle, showMenu] = useState(false);
  return (
    <nav className="navBar">
      <div className="nav-logo">
        <img src={logo} alt="logo" />
        <p>
          <Link className="nav-title" to="/">
            맛난길
          </Link>
        </p>
      </div>

      <ul className={Toggle ? "nav-menu show-menu" : "nav-menu"}>
        <li>
          <Link className="nav-menu-list" to="/food">
            맛집
          </Link>
        </li>
        <li>
          <Link className="nav-menu-list" to="/travel">
            여행지
          </Link>
        </li>
        {/* <i
          className="uil uil-times nav-close"
          onClick={() => showMenu(!Toggle)}
        ></i> */}
      </ul>

      <div className="nav-toggle" onClick={() => showMenu(!Toggle)}>
        <i className="uil uil-apps"></i>
      </div>
    </nav>
  );
};

export default NavBar;
