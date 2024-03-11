import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./navBar.css";
import logo from "../../assets/direction-sign.png";

const NavBar = () => {
  const navigate = useNavigate();
  const [menu, setMenu] = useState("/");
  return (
    <div className="NavBar">
      <div className="nav__logo">
        <img src={logo} />
        <p
          onClick={() => {
            setMenu("/");
            navigate("/");
          }}
        >
          맛난길
        </p>
      </div>

      <ul className="nav__menu">
        <li
          onClick={() => {
            setMenu("food");
            navigate("/food");
          }}
        >
          맛집{menu === "food" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("travel");
            navigate("/travel");
          }}
        >
          여행지{menu === "travel" ? <hr /> : <></>}
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
