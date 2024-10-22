import React, { useState } from "react";
import "../styles/Personal_hspos.css";
import Navbar from "../components/Navbar";
import Topbar from "../components/Topbar";
import { Link } from "react-router-dom";

const Todo = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showFirstModal, setShowFirstModal] = useState(false);
  const [showSecondModal, setShowSecondModal] = useState(false);

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
        <p>HS Pos</p>
      </div>
      <div className="todo_stacks">
        <p>use stacks</p>
      </div>
      <div className="stacks_hspos">
        <div>
          <p>EJS</p>
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
                “가족이 운영하는 POS 사업에 회사 웹페이지가 없어서, 제작 제안을
                받아 시작하게 되었습니다. 이 페이지는 새로운 거래처 유입보다는
                기존 거래처 사용자를 위한 용도로 기획되었으며, 특히 고령층
                사용자를 고려한 직관적인 디자인을 중심으로 제작하고 있습니다.
                사용자 친화적인 접근을 통해 편리한 이용 경험을 제공하는 것이
                목표입니다.”
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
                <li>사용자가 문의사항에 이름, 연락처, 위치 정보를 남기면 데이터베이스에 저장</li>
                <li>원격지원 버튼 클릭 시 서비스 제공</li>
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
      <div className="todo_url"></div>
      <div className="thedate">
        <p>2024.09.14 ~ ing</p>
      </div>
    </div>
    
  );
};

export default Todo;
