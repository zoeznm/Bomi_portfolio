import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/AboutMe.css';
import Navbar from "../components/Navbar";
import Topbar from '../components/Topbar';

const AboutMe = () => {
  return (
    <div>
      <h1>About Me</h1>
      <Navbar />
      <Topbar />
      <Link to="/">메인 페이지로 돌아가기</Link>
    </div>
  );
};

export default AboutMe;