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
        <img src={`${process.env.PUBLIC_URL}/projects.png`} alt="그릇" />
        <div>
          <div className="team team_project1">
            <Link to="/todo">click</Link>
          </div>
          <div className="team team_project2">
            <Link to="/japan">click</Link>
          </div>
          <div className="team team_project3">
            <Link to="/wishlist">click</Link>
          </div>
        </div>
        <div>
          <div>
            <Link to="/todo">Vending-Machine</Link>
          </div>
          <div>
            <Link to="/japan">ERP</Link>
          </div>
          <div>
            <Link to="/wishlist">Machine Learning</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
