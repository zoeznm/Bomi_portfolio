import React, { useRef } from 'react';
import Lottie from 'react-lottie';
import animationData from './data/final3.json';

const LottieAnimation = () => {
  const lottieRef = useRef(null);

  const defaultOptions = {
    loop: false, // 클릭할 때만 애니메이션 실행
    autoplay: false, // 자동 재생 설정 해제
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const handleClick = () => {
    lottieRef.current.stop(); // 애니메이션 정지
    lottieRef.current.play(); // 애니메이션 재생
  };

  return (
    <div onClick={handleClick}>
      <Lottie
        options={defaultOptions}
        height={900}
        width={900}
        ref={lottieRef}
      />
    </div>
  );
};

export default LottieAnimation;