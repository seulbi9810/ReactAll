const Second=(props)=>{
    return(
        <div style={{padding:16, backgroundColor:'lightyellow'}}>
            <p>Main component의 값을 보여주기 : <strong>{props.data}</strong></p>

            <button onClick={()=>{props.setMessage('nice to meet you')}}>data 변경</button>
        </div>
    )

}
export default Second