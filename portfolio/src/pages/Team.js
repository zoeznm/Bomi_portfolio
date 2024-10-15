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
      <div className="chooseone">
        <p>
          <Link to="/Personal">Personal Projects</Link>
        </p>
        <p>
          <Link to="/Team">Team Projects</Link>
        </p>
      </div>
    </div>
  );
};

export default Projects;
