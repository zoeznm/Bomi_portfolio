# portfolio

👋 React 기반으로 제작된 개인 포트폴리오 웹사이트

---

# 💻데모

http://kimbomiportfolio.s3-website.ap-northeast-2.amazonaws.com/

---


## 📦 프로젝트 개요
이 프로젝트는 Create React App(react-scripts)을 기반으로, Lottie 애니메이션을 활용해 인터랙티브한 시각 효과를 구현한 개인 포트폴리오입니다.  

---

## 🔑 주요 기능
- **Lottie 애니메이션**  
  – `lottie-web` + `react-lottie`로 구현한 경량 애니메이션  
- **페이지 라우팅**  
  – `react-router-dom`으로 Home, About, Projects, Contact 등 SPA 형식으로 전환  

---

## 🛠️ 기술 스택
| 구분         | 라이브러리 / 도구                   | 설명                                   |
|------------|-----------------------------------|--------------------------------------|
| **프레임워크** | React 18.3.1                       | UI 컴포넌트 빌딩                          |
| **번들러**    | react-scripts 5.0.1               | Create React App 기본 스크립트               |
| **애니메이션** | lottie-web, react-lottie           | JSON 기반 애니메이션 재생                    |
| **라우팅**    | react-router-dom 6.27.0           | 클라이언트 사이드 라우팅                   |
| **배포**     | AWS S3                            | 빌드된 정적 파일을 S3 버킷에 호스팅        |

---

## 🚀 설치 및 실행 방법

1. **레포지토리 클론**  
   ```bash
   https://github.com/zoeznm/Bomi_portfolio.git
   cd portfolio
2. **의존성 설치**
   ```bash
   npm install
3. **개발 서버 실행**
   ```bash
   npm start
