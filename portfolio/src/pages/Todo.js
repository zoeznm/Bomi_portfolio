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
                “복잡한 기능이 많은 기존 일정 관리 도구는 저에게 오히려
                불편했습니다. 단순히 날짜를 선택하고 메모를 작성하는 최소한의
                기능만 필요하기에, 직관적이고 간편한 투두 캘린더를 직접
                제작하고자 하였습니다.”
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
                <li>다크모드 지원</li>
                <li>년/월 변경 가능</li>
                <li>투두 메모 입력 (해당 날짜에 메모 작성)</li>
                <li>우선순위 설정 가능</li>
                <li>메모, 날짜, 우선순위를 데이터베이스에 저장</li>
                <li>완료 체크 버튼 (완료한 메모 표시)</li>
                <li>메모 삭제 기능 (완료한 메모 또는 삭제할 메모 제거)</li>
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

      <div className="todo_url">
        <a href="http://todocalendar.s3-website.ap-northeast-2.amazonaws.com/">
          http://todocalendar.s3-website.ap-northeast-2.amazonaws.com/
        </a>
      </div>
    </div>
  );
};

export default Todo;
