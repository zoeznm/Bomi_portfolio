import React, { useState } from "react";
import "../styles/Team_Vending.css";
import Navbar from "../components/Navbar";
import Topbar from "../components/Topbar";
import { Link } from "react-router-dom";

const Vending = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showFirstModal, setShowFirstModal] = useState(false);
  const [showSecondModal, setShowSecondModal] = useState(false);

  const slides = [
    "/vending_theme1.png", // 여기에 실제 이미지 경로를 넣어야 해
    "/vending_theme2.png",
    "/vending_theme3.png",
    "/vending_theme4.png",
    "/vending_gumae.png",
    "/vending_thumbnail.png",
    "/vending_admin.png",
    "/vending_login.png",
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
        <p>Vending-Machine</p>
      </div>
      <div className="todo_stacks">
        <p>use stacks</p>
      </div>
      <div className="stacks_todo">
        <div>
          <p>HTML</p>
        </div>
        <div>
          <p>CSS</p>
        </div>
        <div>
          <p>JS</p>
        </div>
        <div>
          <p>Sqlite3</p>
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
              <h4>프로젝트 개요</h4>
              <p>
                수상한 자판기는 5개의 독특한 테마를 가진 자판기로, 각 테마마다
                다양한 제품이 포함되어 있습니다. 사용자는 재미있고 창의적인
                방식으로 제품을 구매할 수 있습니다.
              </p>

              <h4>작동 방식</h4>
              <ul>
                <li>
                  <strong>코인 획득</strong>: 사용자는 수상한 자판기 주변의
                  가로등을 클릭하여 코인을 얻습니다.
                </li>
                <li>
                  <strong>제품 구매</strong>: 획득한 코인을 사용하여 자판기에서
                  제품을 구매할 수 있습니다.
                </li>
                <li>
                  <strong>제품 설명</strong>: 구매한 제품에 대한 설명이
                  제공되며, 각 제품은 해당 테마와 연관된 특징이 있습니다.
                </li>
              </ul>

              <h4>테마 예시</h4>
              
                <p>
                  이 테마에는 다양한 동물과 관련된 제품이 포함되어 있습니다.
                  예를 들어, <strong>"낙타용 마스카라"</strong>는 긴 눈썹을 가진
                  낙타를 위한 제품으로, 눈썹이 짧은 낙타에게도 마법적으로 길어
                  보이게 해주는 특별한 효과가 있습니다.
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
                <li>Javascript 이벤트 모듈 제작</li>
                <li>컴포넌트 드래그 이벤트</li>
                <li>컴포넌트 클릭 이벤트</li>
                <li>프로젝트 전체 디자인 담당</li>
                <li>동적 배경 애니메이션 구현 담당</li>
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
        <p>2024.06.20 ~ 2024.07.15</p>
      </div>
    </div>
  );
};

export default Vending;
