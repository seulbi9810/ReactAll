import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Main from './Main';

// TODO webapp mini project.
// [제작개요]
// 1. 필요한 라이브러리 추가 : sass(스타일 라이브러리), react-icons(아이콘 라이브러리)
// 2. MainComponent - functional component
// 3. UI 구성요소는 커스텀 컴포넌트 영역으로 구분하여 제작 [4개 component로 제작]
//  3.1 TodoContainer : 화면 가운데 위치하며, 할일목록 Root 컴포넌트
//  3.2 TodoInput     : 사용자가 할일을 입력할 수 있도록 스타일이 된 입력 컴포넌트
//  3.3 TodoList      : 할일 항목(TodoItem)들이 놓여질 컴포넌트
//  3.4 TodoItem      : 할일 항목 하나의 모양으로 스타일 된 컴포넌트

//**** 디지인 작업이 끝나면.. 기능 구현****
//4. 우선 TodoList에서 보여줄 대량의 state 데이터 : TodoContainer 컴포넌트에 만들기





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Main></Main>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
