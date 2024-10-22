import React, { useState } from "react";
import "../styles/Personal_wishlist.css";
import Navbar from "../components/Navbar";
import Topbar from "../components/Topbar";
import { Link } from "react-router-dom";

const Todo = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showFirstModal, setShowFirstModal] = useState(false);
  const [showSecondModal, setShowSecondModal] = useState(false);

  const slides = [
    "/wishlist1.png", // 여기에 실제 이미지 경로를 넣어야 해
    "/wishlist2.png",
    "/wishlist3.png",
    "/wishlist4.png",
    "/wishlist5.png",
    "/wishlist6.png",
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
        <p>MyWishList</p>
      </div>
      <div className="wishlist_stacks">
        <p>use stacks</p>
      </div>
      <div className="stacks_wishlist">
        <div>
          <p>HTML</p>
        </div>
        <div>
          <p>CSS</p>
        </div>
        <div>
          <p>JS</p>
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
              <h3>Core Features</h3>
              <ul>
                <li>1. 카드 뒤집기</li>
                <li>2. 옛날 윈도우 창 디자인 제작</li>
                <li>3. 슈팅게임</li>
                <li>4. 키보드 단어 입력받기</li>
                <li>5. hover시 사진 나오기</li>
                <li>6. 클릭 시 사진 나오기</li>
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
      <div className="wishlist_url">
        <a href="http://whatiwantwish.s3-website.ap-northeast-2.amazonaws.com">
          http://whatiwantwish.s3-website.ap-northeast-2.amazonaws.com
        </a>
      </div>
      <div className="thedate">
        <p>2024.06.01 ~ 2024.08.21</p>
      </div>
    </div>
  );
};

export default Todo;
