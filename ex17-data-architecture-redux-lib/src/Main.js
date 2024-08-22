import First from "./component/First"
import Info from "./component/Info"
import Second from "./component/Second"

const Main= ()=>{
    return(
        <div>
            <h1>Main Component</h1>

            {/* store에 있는 number 를 사용하는 컴포넌트 */}
            <First></First>

            <hr></hr>
            {/* store에 있는 number 사용하기 - HOOK으로 쉽게 사용하기 */}
            <Second></Second>
            
            <hr></hr>
            {/* store에 있는 account 객체 사용하기 - HOOK 으로 쉽게 */}
            <Info></Info>

        </div>
    )
}
export default Main