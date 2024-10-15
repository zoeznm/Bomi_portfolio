import React, { useState } from "react";
import "../styles/Contact.css";
import Navbar from "../components/Navbar";
import Topbar from "../components/Topbar";

const Contact = () => {
  const [isContactBoxVisible, setContactBoxVisible] = useState(false);

  const handleToggle = () => {
    setContactBoxVisible(!isContactBoxVisible); // 버튼 클릭 시 상태를 반전
  };

  return (
    <div>
      <Navbar />
      <Topbar />
      <div className="reset">
        <button onClick={handleToggle}></button>
      </div>
      <div
        className="contact_box"
        style={{ display: isContactBoxVisible ? "block" : "none" }}
      >
        <div>
          <a href="https://github.com/zoeznm">
            <img src={`${process.env.PUBLIC_URL}/github.png`} alt="깃허브" />
            https://github.com/zoeznm
          </a>
          <a href="mailto:madlife1292@gmail.com">
            <img src={`${process.env.PUBLIC_URL}/gmail.png`} alt="이메일" />
            madlife1292@gmail.com
          </a>
          <a href="https://www.notion.so/08fff35c41614049b11d73a7836b58f3">
            <img src={`${process.env.PUBLIC_URL}/notion.png`} alt="노션" />
            notion_address
          </a>
        </div>
      </div>
      <nav
        className="contact_message"
        style={{ display: isContactBoxVisible ? "none" : "block" }}
      >
        <ul>
          <li>
            <a href="https://github.com/zoeznm">여러분의 많은</a>
          </li>
          <li>
            <a href="mailto:madlife1292@gmail.com">사랑과 관심</a>
          </li>
          <li>
            <a href="https://www.notion.so/08fff35c41614049b11d73a7836b58f3">
              부탁드립니다.
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Contact;