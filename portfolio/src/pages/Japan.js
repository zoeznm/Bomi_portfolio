import React, { useState } from "react";
import "../styles/Personal_japan.css";
import Navbar from "../components/Navbar";
import Topbar from "../components/Topbar";
import { Link } from "react-router-dom";

const Todo = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showFirstModal, setShowFirstModal] = useState(false);
  const [showSecondModal, setShowSecondModal] = useState(false);

  const slides = [
    "/japan1.png", // 여기에 실제 이미지 경로를 넣어야 해
    "/japan2.png",
    "/japan3.png",
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
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
        <p>Learning Japanese Game</p>
      </div>
      <div className="japan_stacks">
        <p>use stacks</p>
      </div>
      <div className="stacks_japan">
        <div>
          <p>React</p>
        </div>
      </div>
      <div className="modal_button">
        <button
          className="modal-toggle"
          onClick={() => setShowFirstModal(true)}
        >
          Why I Made This
        </button>
        <button
          className="modal-toggle"
          onClick={() => setShowSecondModal(true)}
        >
          Core Features
        </button>
      </div>

      {showFirstModal && (
        <>
          <div className="backdrop" onClick={closeFirstModal}></div>{" "}
          {/* 배경을 클릭하면 모달이 닫히게 처리 */}
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={closeFirstModal}>
                &times;
              </span>
              <h3>Why I Made This</h3>
              <p>
                “이 프로젝트를 기획한 이유는, 일본어 숫자 단어에 대한 이해도가
                부족했기 때문입니다. 특히 숫자 단어 학습을 더 흥미롭게 만들
                방법을 고민하던 중, 직접 프로젝트를 만들어 학습 효과를 높이기로
                했습니다. 게임 형태로 제작하여 무한 반복적인 학습이 가능하게
                하여, 학습자들이 즐겁고 효율적으로 일본어 숫자 단어를 익힐 수
                있도록 하였습니다.”
              </p>
            </div>
          </div>
        </>
      )}

      {showSecondModal && (
        <>
          <div className="backdrop" onClick={closeSecondModal}></div>
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={closeSecondModal}>
                &times;
              </span>
              <h3>Core Features</h3>
              <ul>
                <li>퀴즈 데이터 로드</li>
                <li>게임 플레이</li>
                <li>정답 확인 및 피드백</li>
                <li>진행 상황 표시</li>
                <li>랜덤화된 퀴즈</li>
              </ul>
            </div>
          </div>
        </>
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
      <div className="japan_url">
        <a href="http://japanesenumber.s3-website.ap-northeast-2.amazonaws.com/">
          http://japanesenumber.s3-website.ap-northeast-2.amazonaws.com/
        </a>
      </div>
      <div className="thedate">
        <p>2024.10.10 ~ 2024.10.12</p>
      </div>
    </div>
  );
};

export default Todo;
