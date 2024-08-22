import { useState } from "react"
import First from "./component/First"

const Main= ()=>{

    //Main component의 state
    const [message, setMessage]= useState('Hello react')

    return(
        <div style={{padding:16, backgroundColor:'skyblue', height:'100vh'}}>
            <h2>Data Architecture</h2>

            <p>Main component state data : {message}</p>

            {/* 자식 컴포넌트를 만들고 사용해보기 */}
            <First data={message} setMessage={setMessage}></First>



        </div>
    )
}
export default Main