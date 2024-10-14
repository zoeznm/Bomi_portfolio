import React from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
  return (
    <div>
      <h1>Projects</h1>
      <p>여기에 프로젝트 정보를 작성하세요.</p>
      <Link to="/">메인 페이지로 돌아가기</Link>
    </div>
  );
};

export default Projects;