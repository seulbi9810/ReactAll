import { useDispatch, useSelector } from "react-redux"
import { decreaseAction, increaseAction } from "../redux/number"

const Second=()=>{

    //store에 있는 state값을 선택하여 가져오는 HOOK
    const number= useSelector(state=> state.numberReducer.number)

    //dispatch()함수를 가져오는 HOOK
    const dispatch= useDispatch()

    return(
        <div>
            <h4>This is Second component</h4>

            <p>number : {number}</p>
            <button onClick={()=>dispatch(increaseAction)}>plus</button>
            <button onClick={()=>dispatch(decreaseAction)}>minus</button>
        </div>
    )
}
export default Second