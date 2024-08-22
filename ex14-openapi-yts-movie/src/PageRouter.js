import {BrowserRouter,Route,Routes } from 'react-router-dom'
import Main from './Main'
import MovieDetail from './page/MovieDetail'

const PageRouter=()=>{
    return(
        //서브 경로가 있는 웹호스팅 서버를 사용한다면. index.html페이지 위치를 잘못 인식할 수 있음.
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Routes>
                {/* root url -- localhost:3000 */}
                <Route path='/' element={<Main></Main>}></Route>

                {/* 영화상제정보 페이지로 이동하는 경로 */}
                <Route path='/movie/:id' element={<MovieDetail></MovieDetail>}></Route>
            </Routes>
        </BrowserRouter>
    )
}
export default PageRouter