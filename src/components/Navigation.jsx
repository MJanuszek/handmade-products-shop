import React from "react";
import { Link } from "react-router-dom";
import "../style/Navigation.scss";

function Navigation() {
  return (
    <>
      <ul className="nav-main">
        <Link className="nav-link" to={"/"}>
          HOME
        </Link>
        <Link className="nav-link" to={"/products"}>
          PRODUCTS
        </Link>
        <Link className="nav-link" to={"/contact"}>
          CONTACT
        </Link>
      </ul>
    </>
  );
}

export default Navigation;
