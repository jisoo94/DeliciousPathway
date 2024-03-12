import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navBar.css";
import logo from "../../assets/direction-sign.png";

const NavBar = () => {
  const [menu, setMenu] = useState("/");
  const [Toggle, showMenu] = useState(false);
  return (
    <nav className="navBar">
      <div className="nav__logo">
        <img src={logo} />
        <p
          onClick={() => {
            setMenu("/");
          }}
        >
          <Link className="nav-title" to="/">
            맛난길
          </Link>
        </p>
      </div>

      <ul className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
        <li
          onClick={() => {
            setMenu("food");
          }}
        >
          <Link className="nav-menu-list" to="/food">
            맛집
          </Link>
          {menu === "food" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("travel");
          }}
        >
          <Link className="nav-menu-list" to="/travel">
            여행지
          </Link>
          {menu === "travel" ? <hr /> : <></>}
        </li>
        {/* <i
          className="uil uil-times nav__close"
          onClick={() => showMenu(!Toggle)}
        ></i> */}
      </ul>

      <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
        <i className="uil uil-apps"></i>
      </div>
    </nav>
  );
};

export default NavBar;
