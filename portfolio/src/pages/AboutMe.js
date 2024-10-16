import React, { useState, useEffect } from "react";
import "../styles/AboutMe.css";
import Navbar from "../components/Navbar";
import Topbar from "../components/Topbar";
import Hellotext from "../components/Hellotext";

const AboutMe = () => {
  const [isQuestion, setIsQuestion] = useState(true);
  
  // 애니메이션 트리거 상태 (초기에 true)
  const [bounce, setBounce] = useState(true);

  const handleClick = () => {
    setIsQuestion(!isQuestion);
  };

  // 페이지 로드 후 일정 시간 후에 바운스 애니메이션을 중지
  useEffect(() => {
    const timer = setTimeout(() => {
      setBounce(false);  // 일정 시간이 지나면 바운스 애니메이션 비활성화
    }, 2000);  // 2초 동안 바운스 효과 지속
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <Navbar />
      <Topbar />
      <Hellotext />

      <div className="method">
        {/* 바운스 애니메이션 클래스 추가 */}
        <p 
          onClick={handleClick} 
          className={`animated-text ${bounce ? "bounce" : ""}`}
        >
          {isQuestion ? "?" : "!"}
        </p>
      </div>

      <div className="information">
        <p>Click the ?</p>
      </div>
    </div>
  );
};

export default AboutMe;