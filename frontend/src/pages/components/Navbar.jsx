import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/genshin-logo.png";
import "./Navbar.scss";

export default function Navbar() {
  return (
    <div className="nav-global">
      <nav>
        <img src={logo} alt="logo" />
        <ul>
          <li>
            <NavLink exact to="/map">
              Map
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/characters">
              Characters
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/weapons">
              Weapons
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/element">
              Elements
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/inventory">
              Inventory
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
