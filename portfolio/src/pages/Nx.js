import React, { useState } from "react";
import "../styles/Personal_nx.css";
import Navbar from "../components/Navbar";
import Topbar from "../components/Topbar";
import { Link } from "react-router-dom";

const Nx = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showFirstModal, setShowFirstModal] = useState(false);
  const [showSecondModal, setShowSecondModal] = useState(false);

  const slides = [
    "/nx4.png",
    "/nx1.png", // 여기에 실제 이미지 경로를 넣어야 해
    "/nx2.png",
    "/nx3.png",
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
        <p>Vote-app NX</p>
      </div>
      <div className="todo_stacks">
        <p>use stacks</p>
      </div>
      <div className="stacks_nx">
        <div>
          <p>React</p>
        </div>
        <div>
          <p>Typs</p>
        </div>
        <div>
          <p>Nx</p>
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
                “NX Monorepo를 학습하기 위해 투표 애플리케이션을 제작하였습니다.
                이 애플리케이션은 사용자가 주제를 입력하고 여러 옵션으로 투표할
                수 있는 기능을 제공합니다. 또한, 결과를 분석할 수 있는 분석
                애플리케이션과 함께 배포하여, 실제적인 개발 경험을 쌓고 코드의
                재사용성과 관리 효율성을 높이고자 하였습니다.”
              </p>
            </div>
          </div>
        </>
      )}

      {showSecondModal && (
        <>
          <div className="backdrop" onClick={closeSecondModal}></div>
          <div className="nx_modal">
            <div className="nx_modal-content">
              <span className="close" onClick={closeSecondModal}>
                &times;
              </span>
              <h3>Core Features</h3>
              <div>
                <ul>
                  Vote-app
                  <li>
                    <strong>투표 생성</strong>: 주제와 옵션을 입력하여 투표를
                    생성
                  </li>
                  <li>
                    <strong>투표 참여</strong>: 사용자가 선택한 옵션에 투표
                  </li>
                  <li>
                    <strong>결과 저장</strong>: 로컬 스토리지에 투표 내용 저장
                  </li>
                  <li>
                    <strong>결과 보기</strong>: 실시간으로 투표 결과 확인
                  </li>
                </ul>
              </div>
              <div>
                <ul>
                  Analysis-app
                  <li>
                    <strong>결과 조회</strong>: 로컬 스토리지에 저장된 투표 결과
                    조회
                  </li>
                  <li>
                    <strong>데이터 분석</strong>: 결과를 차트로 시각화하여 제공
                  </li>
                  <li>
                    <strong>결과 필터링</strong>: 주제나 기간에 따라 결과를
                    필터링
                  </li>
                </ul>
              </div>
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
      <div className="nx_url">
        <a href="http://voteappnx.s3-website.ap-northeast-2.amazonaws.com/vote/">
          http://voteappnx.s3-website.ap-northeast-2.amazonaws.com/vote/
        </a>
        <a href="http://voteappnx.s3-website.ap-northeast-2.amazonaws.com/analysis/">
          http://voteappnx.s3-website.ap-northeast-2.amazonaws.com/analysis/
        </a>
      </div>
      <div className="thedate">
        <p>2024.10.26 ~ 2024.10.29</p>
      </div>
    </div>
  );
};

export default Nx;
