import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MyRouter from './MyRouter';

//리액트는 기본적으로 SPA를 지향함. 그렇기에 페이지 전환기술이 없음
//실제 웹사이트는 대부분 여러페이지로 구성해야 함
//리액트에서 여러페이지로 전환되는 듯한 느낌이 되도록 해주는 라이브러리 사용
//가장 유명한 라이브러리 2개
//1. react-router-dom [전통적인 강자]
//2. Next.js [요즘 신흥강자 - framwork]

//이 실습에서는 react-router-dom.. [$npm install react-router-dom or $yarn add react-router-dom]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}

    {/* 페이지별 경로를 지정하는 라우터 컴포넌트 배치[MyRouter.js] */}
    <MyRouter></MyRouter>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
