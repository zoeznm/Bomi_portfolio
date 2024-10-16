import React from "react";
import "../styles/AboutMe.css";
import Navbar from "../components/Navbar";
import Topbar from "../components/Topbar";
import Hellotext from "../components/Hellotext";

const AboutMe = () => {
  return (
    <div>
      <Navbar />
      <Topbar />
      <Hellotext />
      {/* <div>
        <img
          className="aboutme"
          src={`${process.env.PUBLIC_URL}/aboutme.png`}
          alt="김보미의 사진"
        />
        <img
          className="arrow arrow_1"
          src={`${process.env.PUBLIC_URL}/arrow.png`}
          alt="화살표"
        />
        <img
          className="arrow arrow_2"
          src={`${process.env.PUBLIC_URL}/arrow.png`}
          alt="화살표"
        />
        <img
          className="arrow arrow_3"
          src={`${process.env.PUBLIC_URL}/arrow.png`}
          alt="화살표"
        />
        <img
          className="arrow arrow_4"
          src={`${process.env.PUBLIC_URL}/arrow.png`}
          alt="화살표"
        />
        <img
          className="arrow arrow_5"
          src={`${process.env.PUBLIC_URL}/arrow.png`}
          alt="화살표"
        />
        <img
          className="arrow arrow_6"
          src={`${process.env.PUBLIC_URL}/arrow.png`}
          alt="화살표"
        />
      </div> */}
      <div>
        <p>?</p>
        <p>!</p>
      </div>
      <div>
        <p>Click the ?</p>
      </div>

      {/* <div className="question">
        <div className="q1">
          <p>프론트엔드 개발을 선택한 이유는 무엇인가요?</p>
        </div>
        <div className="q2">
          <p>어떤 기술 스택을 사용하고 계신가요?</p>
        </div>
        <div className="q3">
          <p>프론트엔드 개발자로서의 목표는 무엇인가요?</p>
        </div>
      </div>

      <div className="answer">
        <div className="a1">
          <p>
            디자인과 애니메이션을 웹에 구현하며 사용자 경험을 창출하는 것에
            매력을 느껴 프론트엔드를 선택했습니다.
          </p>
        </div>
        <div className="a2">
          <p>HTML, CSS, JS, React, Vue, Tailwind CSS NodeJS, Express, MySQL, PostgreSQL</p>
        </div>
        <div className="a3">
          <p>
            사용자와 소통하는 직관적이고 아름다운 웹사이트를 개발하는 것이
            목표입니다.
          </p>
        </div>
      </div> */}

      {/* <div>
        <div>
          <p>프론트엔드 개발을 선택한 이유는 무엇인가요?</p>
          <div></div>
        </div>
        <div>
          <p>어떤 기술 스택을 사용하고 계신가요?</p>
          <div></div>
        </div>
        <div>
          <p>프론트엔드 개발자로서의 목표는 무엇인가요?</p>
          <div></div>
        </div>
      </div> */}
    </div>
  );
};

export default AboutMe;
