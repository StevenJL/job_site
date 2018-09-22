import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Link to="/">
        <h2>JobSite.com</h2>
      </Link>
    </div>
  );
};

export default Navbar;
