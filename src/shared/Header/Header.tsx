import "./Header.css";

function Header() {
  return (
    <header className="header">
      <img src="../../../public/logo.png" alt="logo" className="header__logo" />
      <ul className="header__menu">
        <li className="menu__item">Home</li>
        <li className="menu__item">Description</li>
      </ul>
    </header>
  );
}

export default Header;
