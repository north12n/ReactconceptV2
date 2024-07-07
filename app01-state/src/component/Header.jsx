import React from "react";
import logo from "../image/logo.jpg";
import "./Header.css";


function Header(props) {
  const { title, major } = props;
  
  return (
    <nav>
      <img src={logo} className="logo" />
      <h3>{major}</h3>
      <a href="/">{title}</a>
    </nav>
  );
}

export default Header;