import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/genshin-logo.png";
import { useCurrentUserContext } from "../contexts/CurrentUserContext";
import "./Navbar.scss";

export default function Navbar() {
  const { user } = useCurrentUserContext();

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
          {user.admin === 1 && (
            <li>
              <NavLink exact to="/adminPage">
                Admin
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
}
