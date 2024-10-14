import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Topbar from "./components/Topbar";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import "./App.css";

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
      <Topbar />
      <Navbar />
      <div className="introduce">
        <div>
          <img
            src={`${process.env.PUBLIC_URL}/mainpage.png`}
            alt="김보미의 포트폴리오"
          />
        </div>
        <div>
          <p>김보미의 포트폴리오</p>
          <p>Front-end Engineer</p>
        </div>
      </div>
    </div>
  );
};

export default App;
