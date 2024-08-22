import { Link } from "react-router-dom"

const Home=()=>{
    return(
        <div>
            <h2>Home</h2>

            {/* [1] <Route>에 등록된 컴포넌트 페이지로 전환해보기 */}
            {/* 보통은 <a> 요소가 그 역할을 수행했음 */}
            <a href="./Second">Second page로 이동 [anchor 요소 이용]</a>
            {/* anchor요소를 사용하면 실제 페이지가 바뀜. 이 방법은 SPA가 아님. 깜빡거림. */}

            <br></br>
            {/* [2] react-router-dom 라이브러리에서 페이지를 전환하는 용도로 만든 <a>요소의 개선판 요소 <Link> */}
            <Link to='./Second'>Second 페이지로 이동 [Link 요소 이용]</Link>

            <br></br>
            {/* [3] 페이지 전환할 때 기존 페이지를 제거하면서 이동 - 바꿔치기 [뒤로가기가 생기지 않음] */}
            <Link to='./second2' replace={true}>Second2 page로 이동하면서 현 페이지 제거 - replace </Link>

            <hr></hr>

            {/* [4] 페이지를 전환하면서 데이터를 전달하기 */}
            {/* 전달방법은 크게 2가지 존재함 */}
            {/* [4.1] URL parameter ~ 예) /third/sam , /third/robin [서브경로를 이용하여 데이터를 전달] */}
            <Link to='/third/sam'>Third page로 이동 - sam 데이터 전달</Link>
            <br></br>
            <Link to='/third/robin'>Third page로 이동 - robin 데이터 전달</Link>
            <br></br>
            <Link to='/third'>Third page로 이동 - 전달하지 않으면? undefined</Link>

            {/* 만약 보내야 할 값이 여러개면? [key=value]형태로 보내는 GET방식처럼.. 보내는 방식 */}
            <hr></hr>
            {/* [4.2] Query string ~ 예) introduce?name=sam&age=20&address=seoul*/}
            <Link to='introduce?name=sam&age=20&address=seoul'>sam 소개</Link>
            <br></br>
            <Link to='introduce?name=robin&age=25&address=busan'>robin 소개</Link>
            <br></br>
            <Link to='introduce'>이름없는 소개</Link>

            {/* [4.3] state를 이용하여 객체를 전달하기! */}
            <br></br>
            <Link to='/introduce' state={{nickname:'son', email:'aa@aa.com'}}>son 소개(state 속성으로 데이터를 전달)</Link>
            <Link to='/introduce' state={{nickname:'park', email:'bb@bb.com'}}>park 소개(state 속성으로 데이터를 전달)</Link>

            <hr></hr>
            
            {/* [5] 중첩 라우팅 실습 [게시글리스트 - 게시글] */}
            <Link to='/board'>게시판으로 이동</Link>
            <br></br>
            <Link to='board2'>게시판으로 이동</Link>

            <hr></hr>

            {/* [6] 중첩 라우팅은 웹앱의 공통사용 레이아웃에도 매우 유용하게 활용됨 */}
            {/* 일반적인 웹앱의 공통레이아웃 : <header>,<main>,<footer> */}
            <Link to='/layout'>공통 레이아웃(탭을 가진 화면) 만들기 - 중첩 라우팅 이용</Link>

            {/* [7] 버튼 클릭으로 페이지 이동하기 실습 - useNavigate HOOK */}
            <p>
                <Link to='/intro'>버튼 클릭으로 페이지 이동 실습하기 - 인트로화면으로 이동</Link>
            </p>

        </div>
    )
}
export default Home