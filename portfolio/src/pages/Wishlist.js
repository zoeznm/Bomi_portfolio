import React from "react";
import "../styles/Personal_wishlist.css";
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
        <p>MyWishList</p>
      </div>
      <div className="wishlist_stacks">
        <p>use stacks</p>
      </div>
      <div className="stacks_wishlist">
        <div className="html">
          <p>HTML</p>
        </div>
        <div className="css">
          <p>CSS</p>
        </div>
        <div className="js">
          <p>JS</p>
        </div>
      </div>
      <div className="wishlist_url">
        <a href="http://whatiwantwish.s3-website.ap-northeast-2.amazonaws.com/">http://whatiwantwish.s3-website.ap-northeast-2.amazonaws.com/</a>
      </div>
    </div>
  );
};

export default Todo;
