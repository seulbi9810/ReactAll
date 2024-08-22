import { useEffect, useState } from "react"
import MovieList from "./component/MovieList"
import styled from 'styled-components'

const Main=()=>{

    //영화정보들을 저장하는 배열 state 변수
    const [movies, setMovies]=useState(null) //초기값 없음

    //라이프사이클 메소드 -- HOOK [android의 onResume ... componentDidMount() + componentDidUpdate() 역할 (화면에 보여진 후)]
    useEffect(()=>{
        //YTS 토렌트 사이트에서 영화정보 Open api 가져오기
        const apiUrl='https://yts.mx/api/v2/list_movies.json?sort_by=download_count&limit=50&page=1'

        //fetch(apiUrl).then(res=>res.text()).then(text=>alert(text)).catch(e=>alert('error:'+e.message))

        //json 데이터를 읽어와서 분석하여 영화정보들을 저장하기  
        fetch(apiUrl)
        .then(res=>res.json())
        .then(json=>setMovies(json.data.movies))
        .catch(e=>alert(e.message))
    },[])

    return(
        <Root>
            <headers>
                <h1>영화정보 OPEN API</h1>
            </headers>
            {/* 자바스크립트 쓴다잉 */}
            <main> 
                {
                    movies ? <MovieList movies={movies}></MovieList> : <p>LOADING.......</p>
                }
            </main>

           
        </Root>
    )
}
export default Main

//스타일 작업 개요. styled-components 라이브러리 적용
//1.Main 컴포넌트의 최상위 요소를 styled.div 로 만들어서 중첩 css로 스타일링
//2.MovieList 컴포넌트의 최상위 요소를 styled.div 로 만들어서 중첩 css로 스타일링
//3.Movie 컴포넌트의 최상위 요소를 styled.div 로 만들어서 중첩 css로 스타일링
const Root= styled.div`
    background-color:black;
    color:white;
    min-height: 100%;
    text-align: center;
    padding: 2rem;
    background-image: url('https://raw.githubusercontent.com/light9639/Netflix/main/img/netflix-background-black.jpg');
    background-repeat: no-repeat;
    background-size: cover;

    main{
        width: 80%;
        max-width: 980px;
        margin: 2rem auto;
    }
`