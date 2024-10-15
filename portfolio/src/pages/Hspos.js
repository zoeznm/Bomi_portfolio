import React from "react";
import "../styles/Personal_hspos.css";
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
        <p>HS Pos</p>
      </div>
      <div className="todo_stacks">
        <p>use stacks</p>
      </div>
      <div className="stacks_hspos">
        <div className="react">
          <p>React</p>
        </div>
        <div className="nodejs">
          <p>Node.js</p>
        </div>
        <div className="express">
          <p>Express</p>
        </div>
        <div className="mysql">
          <p>MySQL</p>
        </div>
      </div>
      <div className="todo_url">
      </div>
    </div>
  );
};

export default Todo;
