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
          <p>P_SQL</p>
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
              <h4>ERP 시스템 개요</h4>
              <p>
                IT 기업을 위한 ERP 시스템은 개발자들의 업무 효율성을 높이고
                프로젝트 관리를 체계적으로 지원하기 위해 설계된 통합 관리
                시스템입니다. 이 시스템은 기업의 다양한 자원—인력, 시간, 예산,
                프로젝트 진행 상황—을 효율적으로 관리하여 최적의 성과를 도출할
                수 있도록 돕습니다.
              </p>
              <h4>주요 기능</h4>
              <ul>
                <li>
                  <strong>프로젝트 관리:</strong> 프로젝트의 기획, 실행,
                  모니터링을 지원하며, 각 개발자의 업무를 효과적으로 배분합니다.
                </li>
                <li>
                  <strong>업무 할당 및 추적:</strong> 각 개발자의 업무를 명확히
                  할당하고, 진행 상태를 지속적으로 모니터링합니다.
                </li>
                <li>
                  <strong>자원 관리:</strong> 인력, 장비, 예산 등의 자원을
                  효율적으로 관리하여 불필요한 낭비를 최소화합니다.
                </li>
                <li>
                  <strong>데이터 분석 및 보고서:</strong> 프로젝트 진행 상황과
                  개발자들의 업무 성과를 기반으로 한 분석 자료를 제공합니다.
                </li>
                <li>
                  <strong>협업 도구:</strong> 팀원 간의 원활한 커뮤니케이션과
                  협업을 위한 플랫폼을 제공합니다.
                </li>
              </ul>
              <h4>결론</h4>
              <p>
                IT 기업의 ERP 시스템은 개발자들의 업무와 프로젝트를 통합적으로
                관리함으로써, 기업의 전반적인 생산성과 효율성을 향상시키는
                중요한 도구입니다. 체계적인 관리와 데이터 기반 의사결정은 기업의
                경쟁력을 강화하고, 성공적인 프로젝트 수행에 기여할 것입니다.
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
