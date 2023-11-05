import { NavLink } from "react-router-dom";

import "./Header.css";

function Header() {
  return (
    <header className="header">
      <img src="../../../public/logo.png" alt="logo" className="header__logo" />
      <div className="header__menu">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">Description</NavLink>
      </div>
    </header>
  );
}

export default Header;
