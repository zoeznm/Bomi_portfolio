import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/AboutMe.css';

const AboutMe = () => {
  return (
    <div>
      <h1>About Me</h1>
      <p>여기에 본인에 대한 소개를 작성하세요.</p>
      <Link to="/">메인 페이지로 돌아가기</Link>
    </div>
  );
};

export default AboutMe;