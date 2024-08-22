import { useParams } from "react-router-dom"

const Board2= ()=>{

    //URL parameter로 전달된 게시글 번호 "/board/:no"
    const params = useParams()


    return(
        <div>
            <h4>게시글 상세 페이지</h4>
            <p>게시글 번호 : {params.no}</p>
        </div>
    )
}
export default Board2