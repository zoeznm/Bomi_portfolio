// LottieAnimation.js
import React from 'react';
import Lottie from 'react-lottie';
import animationData from './data/first.json'; // JSON 파일 경로 설정

const LottieAnimation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return <Lottie options={defaultOptions} height={400} width={400} />;
};

export default LottieAnimation;