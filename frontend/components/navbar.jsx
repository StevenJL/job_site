import React from "react";
import { Link } from "react-router-dom";

const Navbar = props => {
  return (
    <div>
      <Link to="/">
        <h2>JobSite.com</h2>
      </Link>
    </div>
  );
};

export default Navbar;
