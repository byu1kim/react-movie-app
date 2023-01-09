import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navigation.css";

function Navigation() {
  const menu = () => {
    const menu = document.getElementById("menu");
    menu.classList.toggle("menu-style");
  };

  return (
    <div className="nav">
      <div className="logo">
        <NavLink to="/">Logo</NavLink>
      </div>
      <div className="menu" id="menu">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/favourites">Favourites</NavLink>
      </div>
      <div className="menu-btn" id="menu-btn" onClick={menu}>
        <i className="fa-solid fa-bars"></i>
      </div>
    </div>
  );
}

export default Navigation;
