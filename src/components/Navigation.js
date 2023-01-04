import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  const menu = () => {
    const menu = document.getElementById("menu");
    menu.classList.toggle("menu-style");
  };

  return (
    <div className="nav">
      <div className="logo">LOGO</div>
      <div className="menu" id="menu">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/favourites">Favourites</Link>
      </div>
      <div className="menu-btn" id="menu-btn" onClick={menu}>
        <i className="fa-solid fa-bars"></i>
      </div>
    </div>
  );
}

export default Navigation;
