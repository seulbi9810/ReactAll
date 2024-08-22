import { Link, Outlet } from "react-router-dom"

const Layout=()=>{
    return(
        <div style={{display:"flex", flexDirection:'column', height:'100%'}}>
            {/* [1] 공통사용 영역 - 앱 제목줄 header 영역 */}
            <header style={{display:'flex', justifyContent:"space-between", alignItems:"center", boxShadow:'0px 3px 3px skyblue', padding: '.5rem'}}>
                <span>LOGO</span>
                <h2>TITLE</h2>
                <span>MENU</span>
            </header>

            {/* [3] 콘텐츠영역 - 여기는 페이지가 변경되어야 함.<Outlet>*/}
            <main style={{flex:1}}>
                {/* 중첩된 자식 컴포넌트들을 이곳에 그려내기.. */}
                <Outlet></Outlet>
            </main>

            {/* [2] 공통사용 영역 - footer영역 [탭버튼] */}
            <footer style={{display:'flex', justifyContent:"space-around", backgroundColor:'skyblue'}}>
                <Link to='tab1' style={tabStyle}>TAB1</Link>
                <Link to='tab2' style={tabStyle}>TAB2</Link>
                <Link to='tab3'style={tabStyle}>TAB3</Link>
            </footer>
        </div>
    )
}
export default Layout

const tabStyle={
    backgroundColor :'skyblue',
    color : 'white',
    fontWeight:'bold',
    flex:1,
    textAlign:'center',
    border:'1px solid gray',
    padding:'1rem 0'

}