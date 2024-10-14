import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Projects.css';
import Navbar from "../components/Navbar";
import Topbar from '../components/Topbar';

const Projects = () => {
  return (
    <div>
      <h1>Projects</h1>
      <Navbar />
      <Topbar />
      <Link to="/">메인 페이지로 돌아가기</Link>
    </div>
  );
};

export default Projects;