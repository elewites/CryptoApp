import React from "react";

import "./navbar.css";

function Navbar() {
  return (
    <div className="navbar-outer-container">
      <div className="navbar-inner-container">
        <button>USD</button>
        <input placeholder="Search..."></input>
      </div>
    </div>
  );
}

export default Navbar;
