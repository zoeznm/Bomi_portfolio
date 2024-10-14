import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Contact.css';
import Navbar from "../components/Navbar";

const Contact = () => {
  return (
    <div>
      <h1>Contact</h1>
      <p>여기에 연락처 정보를 작성하세요.</p>
      <Navbar />
      <Link to="/">메인 페이지로 돌아가기</Link>
    </div>
  );
};

export default Contact;