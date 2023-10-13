import { Component } from "react";
import Search from "../Search/Search";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <h1 className="header__title">POKEMANIA</h1>
        <Search />
      </div>
    );
  }
}

export default Header;
