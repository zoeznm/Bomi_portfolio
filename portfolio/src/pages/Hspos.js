import React, { useState } from "react";
import "../styles/Personal_hspos.css";
import Navbar from "../components/Navbar";
import Topbar from "../components/Topbar";
import { Link } from "react-router-dom";

const Todo = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    "/hspos1.png", // 여기에 실제 이미지 경로를 넣어야 해
    "/hspos2.png",
    "/hspos3.png",
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

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
        <div className="EJS">
          <p>EJS</p>
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
            {/* 슬라이더 섹션 */}
            <div className="slider-container">
        <div className="slider">
          <img
            src={slides[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className="slide"
          />
        </div>
        <div className="buttons">
          <button onClick={prevSlide}>Prev</button>
          <button onClick={nextSlide}>Next</button>
        </div>
      </div>
      <div className="todo_url">
      </div>
    </div>
  );
};

export default Todo;
