import { Component } from "react";
import Search from "../Search/Search";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <a href="#">
          <img
            src="../../../public/logo.png"
            alt="logo"
            className="header__logo"
          />
        </a>
        <Search />
      </div>
    );
  }
}

export default Header;
