import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {legacy_createStore as createStore} from 'redux'
import rootReducer from './redux/RootReducer';
import {Provider} from 'react-redux'
import Main from './Main';

// 리덕스 라이브러리 : 전역 state 상태 관리를 용이하게 해주는 라이브러리 - 거의 필수에 가까움
// 설치할 라이브러리 2개 : redux, react-redux

// 리액트의 주요용어
// 1. store       : 전역 저장소 (상태값과 리듀서를 가지고 있음 ~~ 코드를 보면 리듀서만 있는 것처럼 보임)
// 2. action      : store에 있는 상태값을 어떻게 변경할지에 대한 이름객체( type속성으로 명명 ) ex)증가, 감소
// 3. reducer     : 이전 state값과 action 객체를 파라미터로 받는 함수로... 액션에 따라 원하는 변경작업을 하여 새로운 state를 return하여 store에 저장함
// 4. dispatch    : store에 있는 state를 변경하는 액션을 리듀서에게 보내는 함수

// 보통 앱 전체에서 사용할 state를 store에 저장하기에..최상위.js에서 store를 생성함
const store= createStore( rootReducer ) //store에는 리듀서를 1개만 등록할 수 있음. 그래서 여러 리듀서를 묶어주는 기능이 존재함 combine

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   {/* <App /> */}
  // </React.StrictMode>

  <Provider store={store}>
    <Main>
      
    </Main>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
