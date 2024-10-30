import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Topbar from "./components/Topbar";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import Personal from "./pages/Personal";
import Todo from "./pages/Todo";
import Wishlist from "./pages/Wishlist";
import Japan from "./pages/Japan";
import Hspos from "./pages/Hspos";
import Nx from "./pages/Nx";
import Portfolio from "./pages/Portfolio";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import ERP from "./pages/ERP";
import Vending from "./pages/Vending";
import ML from "./pages/ML";
import "./App.css";
import LottieAnimation from "./components/animations/LottieAnimation";

const App = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <div>
      <div
        className="circle-cursor"
        style={{ left: `${cursorPosition.x}px`, top: `${cursorPosition.y}px` }}
      ></div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/personal" element={<Personal />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/japan" element={<Japan />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/hspos" element={<Hspos />} />
        <Route path="/nx" element={<Nx />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/team" element={<Team />} />
        <Route path="/vending" element={<Vending />} />
        <Route path="/erp" element={<ERP />} />
        <Route path="/ml" element={<ML />} />
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
          <LottieAnimation />
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
