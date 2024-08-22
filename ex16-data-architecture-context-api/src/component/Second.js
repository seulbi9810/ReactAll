import { MyContext } from "../Main"

const Second=()=>{
    return(
        <div style={{padding:16, backgroundColor:'lightblue'}}>
            <h4>Second component</h4>

            {/* MyContext.Provider 가 제공한 value 객체를 사용하려면..소비자가 되야 함 */}
            {/* Consumer를 배치하면 자동으로 안에 있는 함수가 발동함 */}
            <MyContext.Consumer> 
                {
                    (value)=>{
                        return (
                            <div>
                                <p>Main 컴포넌트의 message : <strong>{value.data}</strong></p>

                                <button onClick={()=>{value.setMessage('GOOD context')}}>클릭</button>
                            </div>
                        )
                    }
                }

            
            </MyContext.Consumer>

            
        </div>
    )
}
export default Second