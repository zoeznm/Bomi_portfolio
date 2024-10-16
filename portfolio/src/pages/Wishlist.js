import React, { useState } from "react";
import "../styles/Personal_wishlist.css";
import Navbar from "../components/Navbar";
import Topbar from "../components/Topbar";
import { Link } from "react-router-dom";

const Todo = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    "/wishlist1.png", // 여기에 실제 이미지 경로를 넣어야 해
    "/wishlist2.png",
    "/wishlist3.png",
    "/wishlist4.png",
    "/wishlist5.png",
    "/wishlist6.png"
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
      <div className="wishlist_url">
        <a href="http://whatiwantwish.s3-website.ap-northeast-2.amazonaws.com">
        http://whatiwantwish.s3-website.ap-northeast-2.amazonaws.com
        </a>
      </div>
    </div>
  );
};

export default Todo;
