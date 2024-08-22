import Second from "./Second"

const First=(props)=>{
    return(
        <div style={{padding:16, backgroundColor:'yellow'}}>
            <p>Main 컴포넌트로 부터 전달받은 props data : <strong>{props.data}</strong> </p>

            {/* First의 자식 컴포넌트 Second */}
            <Second data={props.data} setMessage={props.setMessage}></Second>

        </div>
    )
}
export default First