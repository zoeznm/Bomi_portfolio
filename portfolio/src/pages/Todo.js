import React, { useState } from "react";
import "../styles/Personal_todo.css";
import Navbar from "../components/Navbar";
import Topbar from "../components/Topbar";
import { Link } from "react-router-dom";

const Todo = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showFirstModal, setShowFirstModal] = useState(false);
  const [showSecondModal, setShowSecondModal] = useState(false);

  const slides = [
    "/todo3.png", // 여기에 실제 이미지 경로를 넣어야 해
    "/todo2.png",
    "/todo1.png",
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  const closeFirstModal = () => setShowFirstModal(false);
  const closeSecondModal = () => setShowSecondModal(false);

  return (
    <div>
      <Navbar />
      <Topbar />
      <div className="back">
        <Link to="/Personal">Back</Link>
      </div>
      <div className="personal-title">
        <p>Todo Calendar</p>
      </div>
      <div className="todo_stacks">
        <p>use stacks</p>
      </div>
      <div className="stacks_todo">
        <div>
          <p>React</p>
        </div>
        <div>
          <p>Node.js</p>
        </div>
        <div>
          <p>Express</p>
        </div>
        <div>
          <p>MySQL</p>
        </div>
      </div>
      <div className="modal_button">
        <button className="modal-toggle" onClick={() => setShowFirstModal(true)}>
          Why I Made This
        </button>
        <button className="modal-toggle" onClick={() => setShowSecondModal(true)}>
          Core Features
        </button>
      </div>

      {/* 첫 번째 모달 */}
      {showFirstModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeFirstModal}>&times;</span>
            <h2>기획이유</h2>
            <p>여기에 기획 이유에 대한 설명을 작성하세요.</p>
            <p>여기에 기획 이유에 대한 설명을 작성하세요.</p>
            <p>여기에 기획 이유에 대한 설명을 작성하세요.</p>
          </div>
        </div>
      )}

      {/* 두 번째 모달 */}
      {showSecondModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeSecondModal}>&times;</span>
            <h2>핵심 기능</h2>
            <p>여기에 핵심 기능에 대한 설명을 작성하세요.</p>
          </div>
        </div>
      )}

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

export default Todo;