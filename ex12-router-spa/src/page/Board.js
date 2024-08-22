import { useParams } from "react-router-dom"
import BoardList from "./BoardList"

const Board= ()=>{

    //URL parameter로 전달된 게시글 번호 "/board/:no"
    const params = useParams()


    return(
        <div>
            <BoardList></BoardList>
            <hr></hr>

            <h4>게시글 상세 페이지</h4>
            <p>게시글 번호 : {params.no}</p>
        </div>
    )
}
export default Board