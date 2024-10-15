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
      <nav className='contact_message'>
      <ul>
        <li>
          <a href="https://github.com/zoeznm">여러분의 많은</a>
        </li>
        <li>
        <a href="gmail">사랑과 관심</a>
        </li>
        <li>
        <a href="https://www.notion.so/08fff35c41614049b11d73a7836b58f3">부탁드립니다.</a>
        </li>
      </ul>
    </nav>
    </div>
  );
};

export default Contact;
