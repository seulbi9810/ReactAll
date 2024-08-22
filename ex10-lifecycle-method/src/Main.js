import Home from "./Home"
import Second from "./Second"

const Main=()=>{
    return(
        <div>
            {/* 1) 클래스형 컴포넌트에서 라이프사이클 메소드 실습 */}
            <Home></Home>

            {/* 2) 함수형 컴포넌트에서 라이프사이클 메소드를 대체하는 HOOK 기술 */}
            <Second></Second>
        </div>
    )
}
export default Main