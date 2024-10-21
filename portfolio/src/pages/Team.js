import React from "react";
import "../styles/Team.css";
import Navbar from "../components/Navbar";
import Topbar from "../components/Topbar";
import { Link } from "react-router-dom";

const Team = () => {
  return (
    <div>
      <Navbar />
      <Topbar />
      <div className="team_take">
        <img src={`${process.env.PUBLIC_URL}/projects.png`} alt="bowl" />
        <div>
          <div className="team team_project1">
            <Link to="/vending">click</Link>
          </div>
          <div className="team team_project2">
            <Link to="/erp">click</Link>
          </div>
          <div className="team team_project3">
            <Link to="/ml">click</Link>
          </div>
        </div>
        <div>
          <div>
            <Link to="/vending">Vending-Machine</Link>
          </div>
          <div>
            <Link to="/erp">Developer-ERP</Link>
          </div>
          <div>
            <Link to="/ml">Machine Learning</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
