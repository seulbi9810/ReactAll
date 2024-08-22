import { Link, NavLink, Outlet } from "react-router-dom"

const BoardList2=()=>{
    return(
        <div>
            <h3>BOARD LIST #2</h3>

            {/* <ul>
                <li><Link to='/board2/1'>게시글 1</Link></li>
                <li><Link to='/board2/2'>게시글 2</Link></li>
                <li><Link to='/board2/3'>게시글 3</Link></li>
            </ul> */}

            {/* 현재 보여주는 페이지의 링크와 같으면 스타일을 다르게 적용시키기 위한 Link의 업그레이드 버전 */}
            <ul>
                <li><NavLink to='/board2/1' style={(props)=> props.isActive? {color:"blue", fontWeight:'bold'} : {}}>게시글 1</NavLink></li>
                <li><NavLink to='/board2/2' style={(props)=> props.isActive? {color:"blue", fontWeight:'bold'} : {}}>게시글 2</NavLink></li>
                <li><NavLink to='/board2/3' style={(props)=> props.isActive? {color:"blue", fontWeight:'bold'} : {}}>게시글 3</NavLink></li>
            </ul>
            
            {/* 중첩 Route로 등록한 컴포넌트가 그려질 영역 */}
            <hr></hr>
            <Outlet></Outlet>
        </div>
    )
}
export default BoardList2