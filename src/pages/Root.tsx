import React from "react";
import { Outlet, Link } from "react-router-dom";

const Root = () => {
  return (
    <>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <Outlet />
    </>
  );
};

export default Root;