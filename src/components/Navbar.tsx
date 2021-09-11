import React from "react";
import PropTypes from "prop-types";
import { Book, Code, Dog, User } from "./svgs";
import "./css/Navbar.css";

function NavItem(props: { name: string; children: PropTypes.ReactNodeLike }) {
  return (
    <div className="nav__item">
      {props.children}
      <span style={{ fontSize: "1.1rem" }}>{props.name}</span>
    </div>
  );
}

function Navbar(): JSX.Element {
  return (
    <div className="navbar">
      <NavItem name="HoundPedia">
        <Dog size="35px" />
      </NavItem>

      <NavItem name="Book">
        <Book size="30px" />
      </NavItem>

      <NavItem name="Source">
        <Code size="30px" />
      </NavItem>

      <NavItem name="Profile">
        <User size="35px"/>
      </NavItem>
    </div>
  );
}

export default Navbar;
