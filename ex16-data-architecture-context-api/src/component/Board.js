import { useContext } from "react"
import { MyContext } from "../Main"

const Board=()=>{

    //Context.Provider의 value값을 쉽게 사용하기 위한 HOOK
    const value= useContext(MyContext)

    return(
        <div style={{padding:16, backgroundColor:'lightgreen'}}>
            <h4>Board component</h4>

            <p>Main 컴포넌트의 message : {value.data}</p>
            <button onClick={()=>value.setMessage('와!!!!!')}> 클릭 </button>

        </div>
    )
}
export default Board