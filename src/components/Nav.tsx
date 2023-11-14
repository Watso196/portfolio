import * as React from "react";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <nav>
      <ul className="nav-list">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/blog"}>Blog</Link>
        </li>
      </ul>
      <button type="button">Light mode/dark mode</button>
    </nav>
  );
};

export default Nav;
