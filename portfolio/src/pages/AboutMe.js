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
      </div>
       */}
      <div className="character">
        <p>open the cabinet</p>
      </div>
      {/* <div className="qna_1">
        <p>프론트엔드 개발을 선택한 이유는 무엇인가요?</p>
      </div>
      <div className="qna_2">
        <p>어떤 기술 스택을 사용하고 계신가요?</p>
      </div>
      <div className="qna_2">
        <p>프론트엔드 개발자로서의 목표는 무엇인가요?</p>
      </div> */}
    </div>
  );
};

export default AboutMe;
