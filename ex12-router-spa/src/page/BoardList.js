import { Link } from "react-router-dom"

const BoardList=()=>{
    return(
        <div>
            <h3>BOARD LIST</h3>

            <ul>
                <li><Link to='/board/1'>게시글 1</Link></li>
                <li><Link to='/board/2'>게시글 2</Link></li>
                <li><Link to='/board/3'>게시글 3</Link></li>
            </ul>

        </div>
    )
}
export default BoardList