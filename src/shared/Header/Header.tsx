import { NavLink } from "react-router-dom";

import "./Header.css";

function Header() {
  return (
    <header className="header">
      <img src="../../../public/logo.png" alt="logo" className="header__logo" />
      <div className="header__menu">
        <NavLink
          to="/"
          style={{ color: "yellowgreen", textDecoration: "none" }}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          style={{ color: "yellowgreen", textDecoration: "none" }}
        >
          Description
        </NavLink>
      </div>
    </header>
  );
}

export default Header;
