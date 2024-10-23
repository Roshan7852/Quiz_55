import React from "react";
import "./Navbar.css";
import MainRouter from "../../../MainRouter";

const Navbar = () => {
  return (
    <div>
      {/* <MainRouter/> */}
      <nav className="navbar">
        <div className="logo">Quiz App</div>
        <ul className="nav-links">
          <li>
            <a href="/">Home</a>
          </li>

          <li>
            <a href="/quiz">Quiz</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
