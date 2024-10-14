import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

// 메인 페이지 컴포넌트
const MainPage = () => {
  return (
    <div>
      <Navbar />
      <h1>Main Page</h1>
      <p>여기에 포트폴리오 소개 내용을 작성하세요.</p>
    </div>
  );
};

export default App;