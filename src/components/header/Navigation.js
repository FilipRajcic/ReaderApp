import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
// My navigation in the header
const Navigation = () => {
  return (
    <div className="header__nav">
      <Link className="header__nav__link" to={`/`}>
        My books
      </Link>
    </div>
  );
};

export default Navigation;
