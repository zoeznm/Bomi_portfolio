import React from "react";
import "../styles/Personal_todo.css";
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
      <div className="todo_url">
      </div>
    </div>
  );
};

export default Todo;
