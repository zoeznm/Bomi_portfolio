import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 

const Navbar = () => {
  return (
    <nav className='menubar'>
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
  );
};

export default Navbar;