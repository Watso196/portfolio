import * as React from "react";
import Nav from "../components/Nav";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Nav />
      <div id="intro">
        <h1>
          Hi, I&rsquo;m Kalib. I enjoy engineering intuitive, impactful, and
          accessible digital experiences. I also{" "}
          <Link to="blog">write about it</Link>!
        </h1>
      </div>
      <div id="writing">
        <h2>Writing</h2>
        <ul id="article-list">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </>
  );
};

export default Home;
