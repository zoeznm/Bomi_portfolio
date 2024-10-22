import React, { useState } from "react";
import "../styles/Personal_todo.css";
import Navbar from "../components/Navbar";
import Topbar from "../components/Topbar";
import { Link } from "react-router-dom";

const ML = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showFirstModal, setShowFirstModal] = useState(false);
  const [showSecondModal, setShowSecondModal] = useState(false);

  const slides = [
    "/ml4.png", // 여기에 실제 이미지 경로를 넣어야 해
    "/ml1.png",
    "/ml2.png",
    "/ml3.png",
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
        <p>Machine Learning</p>
      </div>
      <div className="todo_stacks">
        <p>use stacks</p>
      </div>
      <div className="stacks_todo">
        <div className="react">
          <p>VUE</p>
        </div>
        <div className="nodejs">
          <p>TS</p>
        </div>
        <div className="express">
          <p>Python</p>
        </div>
        <div className="mysql">
          <p>Pytorch</p>
        </div>
        <div className="mysql">
          <p>Flask</p>
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
              <div class="goal">
                <h4>프로젝트 목표</h4>
                <p>
                  이 프로젝트의 목표는 야생동물의 출몰을 실시간으로 감지하고,
                  이를 통해 생태계 보호 및 인간-야생동물 간의 갈등을 최소화하는
                  것입니다.
                </p>
              </div>

              <h4>주요 기능</h4>
              <ul>
                <li>
                  <strong>실시간 모니터링</strong>: 설치된 카메라를 통해
                  야생동물의 움직임을 지속적으로 감지하고, 머신러닝 모델을
                  활용하여 특정 종을 식별합니다.
                </li>
                <li>
                  <strong>출몰 알림</strong>: 야생동물이 감지되면 사용자는 즉시
                  알림을 받아, 해당 지역의 안전성을 확보할 수 있도록 돕습니다.
                </li>
                <li>
                  <strong>데이터 분석</strong>: 수집된 데이터를 기반으로 동물의
                  이동 경로와 출몰 패턴을 분석하여, 보호구역 관리 및 연구에
                  기여합니다.
                </li>
              </ul>

              <h4>프로젝트 목표</h4>
              <p>
                이 프로젝트는 기술적인 혁신과 환경 보호의 융합을 통해,
                사용자에게 유용한 정보를 제공하고, 야생동물과의 안전한 공존을
                촉진하는 것을 목표로 하고 있습니다.
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
                <li>위험 야생동물 제보를 위한 사진 업로드 페이지 제작</li>
                <li>UI 설계 및 피그마 제작</li>
                <li>프론트엔드-머신러닝 연결</li>
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
        <p>2024.09.25 ~ 2024.10.17</p>
      </div>
    </div>
  );
};

export default ML;
