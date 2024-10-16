/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "../styles/AboutMe.css";
import { Link } from 'react-router-dom';
import Hellotext from "../components/Hellotext";

const AboutMe = () => {


  return (
    <div>
      <nav className="aboutme_topbar">
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
      <Hellotext />
      <nav className='aboutme_menu'>
      <ul>
        <li>
          <Link to="/aboutme">About Me</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
      <nav className="aboutme_menubar">
        <ul>
          <li>
            <p>Who i am?</p>
          </li>
          <li>
            <p>Why Frontend Engineer?</p>
          </li>
          <li>
            <p>What Stacks?</p>
          </li>
          <li>
            <p>What Goals?</p>
          </li>
        </ul>
      </nav>
    </div>
    
  );
};

export default AboutMe;
