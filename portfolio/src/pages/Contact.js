import React from "react";
import "../styles/Contact.css";
import Navbar from "../components/Navbar";
import Topbar from "../components/Topbar";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <Topbar />
      <div className="reset">
        <button></button>
      </div>
      <div className="manylovethx">
        <p>많은</p>
        <p>관심</p>
        <p>부탁드립니다.</p>
      </div>
    </div>
  );
};

export default Contact;
