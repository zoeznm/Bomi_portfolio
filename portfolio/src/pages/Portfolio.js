import React, { useState } from "react";
import "../styles/Personal_portfolio.css";
import Navbar from "../components/Navbar";
import Topbar from "../components/Topbar";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showFirstModal, setShowFirstModal] = useState(false);
  const [showSecondModal, setShowSecondModal] = useState(false);

  const slides = [
    "/portfolio1.png",
    "/portfolio2.png",
    "/portfolio3.png",
    "/portfolio4.png",
    "/portfolio5.png",
    "/portfolio6.png",
    "/portfolio7.png",
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
        <p>Bomi's Portfolio</p>
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
                “이 페이지는 제 프로젝트를 효과적으로 보여줄 수 있는 공간으로,
                방문자들이 쉽게 접근하고 이해할 수 있도록 구성했습니다. 각
                작업물은 명확한 설명과 함께 시각적으로 매력적인 형태로 배치하여,
                사용자가 흥미를 느낄 수 있도록 하였습니다. 또한, 반응형 디자인을
                적용하여 다양한 기기에서 최적의 경험을 제공할 수 있도록
                하였으며, 방문자들이 편리하게 탐색할 수 있는 내비게이션을
                구현했습니다. 이러한 노력들을 통해 제 작업물의 가치를 더 많은
                사람들과 공유하고, 피드백을 받을 수 있는 기회를 마련하고자
                했습니다.”
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
                <li>작업물 갤러리</li>
                <li>소셜 미디어 링크</li>
                <li>연락처 폼</li>
                <li>기술 스택</li>
                <li>반응형 디자인</li>
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
        <p>2024.10.14 ~ 2024.10.23</p>
      </div>
    </div>
  );
};

export default Portfolio;
