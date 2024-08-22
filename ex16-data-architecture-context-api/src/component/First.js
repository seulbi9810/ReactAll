import Board from "./Board"
import Second from "./Second"

const First=()=>{
    return(
        <div style={{padding:16, backgroundColor:'aqua'}}>
            <h4>First component</h4>

            <Second></Second>
            <hr></hr>
            <Board></Board>
        </div>
    )
}
export default First