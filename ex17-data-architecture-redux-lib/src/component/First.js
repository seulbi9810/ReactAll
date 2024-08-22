import { connect } from "react-redux"
import { decreaseAction, increaseAction } from "../redux/number"

const First=(props)=>{
    return(
        <div>
            <h3>This is First Component</h3>

            <p>number : {props.number}</p>

            <button onClick={()=>props.aaa()}>증가</button>
            <button onClick={()=>props.bbb()}>감소</button>
        </div>
    )
}

//이 파일안에서 store에 저장된 number state값을 가져오기 위해 redux의 connect()함수 이용하기 [(1)state 취득 함수, (2)dispatch 취득 함수]

//(1) store의 state값을 컴포넌트의 props로 변경하여 제공하는 함수
const mapStateToProps=(state)=>{
    return {number:state.numberReducer.number}
} 

//(2) 리듀서에 액션을 보내주는 dispach함수가 필요함. 이를 컴포넌트의 props로 전달하여 제공하는 함수
const mapDispatchToProps=(dispatch)=>{
    return{
        aaa : ()=>{dispatch(increaseAction)},
        bbb : ()=>{dispatch(decreaseAction)},
    }    
}

export default connect(mapStateToProps,mapDispatchToProps)(First)

