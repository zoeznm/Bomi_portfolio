import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Contact.css';
import Navbar from "../components/Navbar";
import Topbar from '../components/Topbar';

const Contact = () => {
  return (
    <div>
      <h1>Contact</h1>
      <Navbar />
      <Topbar />
      <Link to="/">메인 페이지로 돌아가기</Link>
    </div>
  );
};

export default Contact;