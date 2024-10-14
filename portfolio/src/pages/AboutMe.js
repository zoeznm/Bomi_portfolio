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
      <div>
        <img
          className="aboutme"
          src={`${process.env.PUBLIC_URL}/aboutme.png`}
          alt="김보미의 사진"
        />
        <div className="arrowimg_1">
          <img
            className="arrow arrow_1"
            src={`${process.env.PUBLIC_URL}/arrow.png`}
            alt="화살표"
          />
        </div>
        <div className="arrowimg_2">
          <img
            className="arrow arrow_2"
            src={`${process.env.PUBLIC_URL}/arrow.png`}
            alt="화살표"
          />
        </div>
        <div className="arrowimg_3">
          <img
            className="arrow arrow_3"
            src={`${process.env.PUBLIC_URL}/arrow.png`}
            alt="화살표"
          />
        </div>
        <div className="arrowimg_4">
          <img
            className="arrow arrow_4"
            src={`${process.env.PUBLIC_URL}/arrow.png`}
            alt="화살표"
          />
        </div>
        <div className="arrowimg_5">
          <img
            className="arrow arrow_5"
            src={`${process.env.PUBLIC_URL}/arrow.png`}
            alt="화살표"
          />
        </div>
        <div className="arrowimg_6">
          <img
            className="arrow arrow_6"
            src={`${process.env.PUBLIC_URL}/arrow.png`}
            alt="화살표"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
