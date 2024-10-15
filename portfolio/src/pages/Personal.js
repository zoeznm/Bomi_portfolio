import React from "react";
import "../styles/Personal.css";
import Navbar from "../components/Navbar";
import Topbar from "../components/Topbar";
import { Link } from "react-router-dom";

const Personal = () => {
  return (
    <div>
      <Navbar />
      <Topbar />
      <div className="personal_take">
        <img src={`${process.env.PUBLIC_URL}/projects.png`} alt="그릇" />
        <div className="personal personal_project1">
        <Link to="/todo">click</Link>
        </div>
        <div className="personal personal_project2">
        <Link to="/japan">click</Link>
        </div>
        <div className="personal personal_project3">
        <Link to="/wishlist">click</Link>
        </div>
        <div className="personal personal_project4">
        <Link to="/hspos">click</Link>
        </div>
      </div>
    </div>
  );
};

export default Personal;
