import React from "react";
import "../styles/Personal_japan.css";
import Navbar from "../components/Navbar";
import Topbar from "../components/Topbar";
import { Link } from "react-router-dom";

const Todo = () => {
  return (
    <div>
      <Navbar />
      <Topbar />
      <div className="back">
      <Link to="/Personal">Back</Link> 
      </div>
      <div className="personal-title">
        <p>Learning Japanese Game</p>
      </div>
      <div className="japan_stacks">
        <p>use stacks</p>
      </div>
      <div className="stacks_japan">
        <div className="react">
          <p>React</p>
          </div>
      </div>
      <div className="japan_url">
        <a href="http://japanesenumber.s3-website.ap-northeast-2.amazonaws.com/">http://japanesenumber.s3-website.ap-northeast-2.amazonaws.com/</a>
      </div>
    </div>
  );
};

export default Todo;
