import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navigation.css";

function Navigation() {
  const body = document.body;

  const openMenu = () => {
    body.classList.toggle("show");
  };

  const removeMenu = () => {
    body.classList.remove("show");
  };

  return (
    <>
      <header>
        <div className="logo">
          <NavLink to="/">
            <img src="/images/logo.png" alt="logo" />
          </NavLink>
        </div>

        <div
          className="btn-menu"
          id="btn-menu"
          onClick={openMenu}
          onMouseDown={(e) => e.preventDefault()}
        >
          <div className="button-content">
            <div className="bar"></div>
          </div>
        </div>

        <nav className="nav" onClick={removeMenu}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/favourites">Favourites</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Navigation;
