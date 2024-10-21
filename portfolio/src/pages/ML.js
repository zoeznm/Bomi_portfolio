import React, { useState } from "react";
import "../styles/Personal_todo.css";
import Navbar from "../components/Navbar";
import Topbar from "../components/Topbar";
import { Link } from "react-router-dom";

const ML = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const slides = [
    "/todo3.png", // 여기에 실제 이미지 경로를 넣어야 해
    "/todo2.png",
    "/todo1.png"
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    <div>
      <Navbar />
      <Topbar />
      <div className="back">
        <Link to="/Team">Back</Link>
      </div>
      <div className="personal-title">
        <p>Machine Learning</p>
      </div>
      <div className="todo_stacks">
        <p>use stacks</p>
      </div>
      <div className="stacks_todo">
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
        <a href="http://todocalendar.s3-website.ap-northeast-2.amazonaws.com/">
          http://todocalendar.s3-website.ap-northeast-2.amazonaws.com/
        </a>
      </div>
    </div>
  );
};

export default ML;