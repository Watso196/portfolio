import * as React from "react";
import { Link } from "react-router-dom";
import SwitchControl from "./SwitchControl";
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
      <SwitchControl
        label="Light mode/dark mode"
        id="light-dark-switch"
        onChange={() => {
          console.log("mode switch change");
          document.querySelector("body")?.classList.toggle("light-mode");
        }}
      />
      <SwitchControl
        label="Easy-read fonts/stylized fonts"
        id="fonts-switch"
        onChange={() => {
          console.log("font switch change");
        }}
      />
    </nav>
  );
};

export default Nav;
