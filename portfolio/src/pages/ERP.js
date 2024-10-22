import React, { useState } from "react";
import "../styles/Personal_todo.css";
import Navbar from "../components/Navbar";
import Topbar from "../components/Topbar";
import { Link } from "react-router-dom";

const ERP = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showFirstModal, setShowFirstModal] = useState(false);
  const [showSecondModal, setShowSecondModal] = useState(false);

  const slides = [
    "/erp1.png", // 여기에 실제 이미지 경로를 넣어야 해
    "/erp2.png",
    "/erp3.png",
    "/erp4.png",
    "/erp5.png",
    "/erp6.png",
    "/erp7.png",
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
        <Link to="/Team">Back</Link>
      </div>
      <div className="personal-title">
        <p>Developer ERP</p>
      </div>
      <div className="todo_stacks">
        <p>use stacks</p>
      </div>
      <div className="stacks_todo">
        <div className="react">
          <p>React</p>
        </div>
        <div className="nodejs">
          <p>Next.js</p>
        </div>
        <div className="nodejs">
          <p>Vanilla</p>
        </div>
        <div className="express">
          <p>Express</p>
        </div>
        <div className="express">
          <p>TS</p>
        </div>
        <div className="express">
          <p>Nest.js</p>
        </div>
        <div className="mysql">
          <p>Mongo</p>
        </div>
        <div className="mysql">
          <p>lerna</p>
        </div>
      </div>

      <div className="modal_button">
        <button
          className="modal-toggle"
          onClick={() => setShowFirstModal(true)}
        >
          What We Made
        </button>
        <button
          className="modal-toggle"
          onClick={() => setShowSecondModal(true)}
        >
          What I Do
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
              <h3>What We Made</h3>
              <p>
                “처음에 제작한 개인 작업물로, 원하는 디자인과 애니메이션을
                자유롭게 구현할 수 있는 프로젝트를 만들고자 했습니다. 이에 따라
                나만의 Wishlist 페이지를 기획하게 되었고, 이 페이지를 통해 다른
                사용자에게 직관적이고 재미있게 내용을 전달할 수 있는 경험을
                제공하고자 제작하게 되었습니다.”
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
              <h3>What I Do</h3>
              <ul>
                <li>디자인 시안 제작 (피그마)</li>
                <li>사용자 개인 정보 조회 및 수정</li>
                <li>사용자 권한·월급·분야 지정</li>
                <li>관리자의 회원가입 요청 승인 및 데이터 입력 기능 제작</li>
                <li>Client_칸반, 팔로우, 로그인 리팩토링</li>
                <li>Server_회원가입 리팩토링</li>
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

      <div className="thedate">
        <p>2024.07.16 ~ 2024.08.14</p>
        <p>2024.08.22 ~ 2024.09.30</p>
      </div>
    </div>
  );
};

export default ERP;
