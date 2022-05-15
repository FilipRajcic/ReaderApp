import React from "react";
import SearchBar from "./SearchBar";
import Navigation from "./Navigation";

import "./Header.scss";

const Header = () => {
  // Getting my logo from images folder
  const logo = require("../../images/logo.png");
  return (
    <div className="header">
      <img src={logo} alt="Reader App Logo" className="header__logo" />
      <SearchBar />
      <Navigation />
    </div>
  );
};

export default Header;
