import React, { useState } from "react"
import First from "./component/First"

// 일종의 전역변수 모아놓은 저장공간 만들기 -- 다른 컴포넌트에서 사용하기 위해 export
export const MyContext=React.createContext()

const Main=()=>{

    const [message, setMessage]= useState('Hello context api')

    

    return(
        <div>
            <h2>Context API test</h2>

            {/* 전역공간의 저장값을 제공하는 컴포넌트.. 이 컴포넌트의 자식.자손...모두 정보 사용가능 */}
            <MyContext.Provider value={{data:message, setMessage}}>
                {/* 자식 컴포넌트 */}
                <First></First>
            </MyContext.Provider>

        </div>
    )
}
export default Main