import React, { useState } from "react";
import "../styles/Personal_portfolio.css";
import Navbar from "../components/Navbar";
import Topbar from "../components/Topbar";
import { Link } from "react-router-dom";

const Todo = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    "/portfolio1.png",
    "/portfolio2.png",
    "/portfolio3.png",
    "/portfolio4.png",
    "/portfolio5.png",
    "/portfolio6.png",
    "/portfolio7.png",
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
        <p>Bomi's Portfolio</p>
      </div>
      <div className="japan_stacks">
        <p>use stacks</p>
      </div>
      <div className="stacks_japan">
        <div>
          <p>React</p>
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
      <div className="japan_url">
        <a href="http://japanesenumber.s3-website.ap-northeast-2.amazonaws.com/">
          http://japanesenumber.s3-website.ap-northeast-2.amazonaws.com/
        </a>
      </div>
    </div>
  );
};

export default Todo;
