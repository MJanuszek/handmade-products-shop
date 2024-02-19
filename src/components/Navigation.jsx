import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <>
      <ul>
        <Link to={"/"}>HOME</Link>
        <Link to={"/products"}>PRODUCTS</Link>
        <Link to={"/contact"}>CONTACT</Link>
      </ul>
    </>
  );
}

export default Navigation;
