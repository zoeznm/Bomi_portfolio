/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import "./Topbar.css";

const Topbar = () => {
  return (
    <nav className="topbar">
      <ul>
        <li>
          <Link to="/">
            Bomi's Portfolio
          </Link>
        </li>
        <li>
          <div>
            <a href="#">matomabo</a>
            <a href="#">Bomi Kim</a>
            <a href="#">zoeznm</a>
          </div>
        </li>
        <li>
          <div>
            <a href="#">
              Please don’t copy or use any of my work without permission
            </a>
            <a href="#">© All rights reserved.</a>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Topbar;
