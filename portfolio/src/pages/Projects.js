import React from "react";
import "../styles/Projects.css";
import Navbar from "../components/Navbar";
import Topbar from "../components/Topbar";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div>
      <Navbar />
      <Topbar />
      <nav className='chooseone'>
      <ul>
        <li>
        <Link to="/Personal">Personal Projects</Link>
        </li>
        <li>
        <Link to="/Team">Team Projects</Link>
        </li>
      </ul>
    </nav>
    </div>
  );
};

export default Projects;
