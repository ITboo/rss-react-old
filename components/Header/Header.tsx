import Link from "next/link";
import logo from "@/public/assets/logo.png";
import Image from "next/image";

import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="">
        <Image src={logo} alt="logo" className="header__logo" />
      </div>
      <div className="header__menu">
        <Link href="/">Home</Link>
        <Link href="/about">Description</Link>
      </div>
    </header>
  );
}

export default Header;
