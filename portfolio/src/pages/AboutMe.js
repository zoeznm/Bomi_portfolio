/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "../styles/AboutMe.css";
import { Link } from "react-router-dom";
import Hellotext from "../components/Hellotext";

const AboutMe = () => {
  // 상태 변수를 추가하여 현재 표시할 섹션을 관리합니다.
  const [currentSection, setCurrentSection] = useState(null);

  // 섹션을 클릭할 때 상태를 업데이트하는 함수
  const handleSectionClick = (section) => {
    setCurrentSection(section);
  };

  return (
    <div>
      <nav className="aboutme_topbar">
        <ul>
          <li>
            <Link to="/">Bomi's Portfolio</Link>
          </li>
          <li>
            <div>
              <a href="#">matomabo</a>
              <a href="#">Bomi Kim</a>
              <a href="#">zoeznm</a>
            </div>
          </li>
          <li>
            <div>
              <a href="#">
                Please don’t copy or use any of my work without permission
              </a>
              <a href="#">© All rights reserved.</a>
            </div>
          </li>
        </ul>
      </nav>
      <Hellotext />
      <nav className="aboutme_menu">
        <ul>
          <li>
            <Link to="/aboutme">About Me</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <nav className="aboutme_menubar">
        <ul>
          <li onClick={() => handleSectionClick('whoiam')}>
            <p>Who I am?</p>
          </li>
          <li onClick={() => handleSectionClick('whyfront')}>
            <p>Why Frontend Engineer?</p>
          </li>
          <li onClick={() => handleSectionClick('whatstacks')}>
            <p>What Stacks?</p>
          </li>
          <li onClick={() => handleSectionClick('whatgoals')}>
            <p>What Goals?</p>
          </li>
        </ul>
      </nav>

      <div className="aboutme_introduce">
        {/* 클릭된 섹션에 따라 내용을 표시합니다. */}
        {currentSection === 'whoiam' && (
          <div className="whoiam">
            <p>안녕하세요 저는 김보미입니다.</p>
            <p>프론트 엔드 개발자를 희망하고 있습니다.</p>
            <p>2001.04.06</p>
            <p>한남대학교 멀티미디어공학과 졸업</p>
          </div>
        )}
        {currentSection === 'whyfront' && (
          <div className="whyfront">
            <div>
              <p>저는 디자인과 창의적인 작업에 관심이 많았습니다</p>
              <p>
                웹을 통해 사람들이 경험하는 시각적 요소와 인터랙티브한 기능들이{" "}
              </p>
              <p>
                사용자 경험에 얼마나 큰 영향을 미치는지 알게 되면서, 프론트엔드
                개발에 매료되었습니다.
              </p>
            </div>
            <div>
              <p>특히, 제가 디자인한 것을 실제로 구현하고,</p>
              <p>
                사용자와 상호작용할 수 있는 웹 애플리케이션을 만드는 것이 정말
                매력적으로 느껴졌습니다.
              </p>
              <p>그래서 프론트엔드 개발을 선택하게 되었습니다.</p>
            </div>
          </div>
        )}
        {currentSection === 'whatstacks' && (
          <div className="whatstacks">
            <div>
              <p>Frontend</p>
              <p>React</p>
              <p>Javascript</p>
              <p>Next.js</p>
              <p>Tailwind CSS</p>
            </div>
            <div>
              <p>Backend</p>
              <p>Node.js</p>
              <p>Nest.js</p>
              <p>MySQL</p>
              <p>postgreSQL</p>
            </div>
          </div>
        )}
        {currentSection === 'whatgoals' && (
          <div className="whatgoals">
            <p>Happy</p>
            <p>Frontend Engineer!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AboutMe;