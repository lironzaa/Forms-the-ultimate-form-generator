import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
      <nav
          style={{
            borderBottom: "solid 1px",
            paddingBottom: "1rem",
          }}>
        <Link to="/">User</Link> |{" "}
        <Link to="/admin">Admin</Link>
      </nav>
  );
};

export default NavBar;