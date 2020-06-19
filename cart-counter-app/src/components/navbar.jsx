import React, { Component } from "react";

//Stateless Functional Component

const Navbar = props => {
  //habe to give props here in arguments
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand">Navbar</a>
      <span className="badge badge-pill badge-secondary">
        {props.totalCounters}
      </span>
    </nav>
  );
};

export default Navbar;
