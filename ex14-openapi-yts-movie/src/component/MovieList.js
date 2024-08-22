import styled from "styled-components"
import Movie from "./Movie"
import { useState } from "react"
import Pagination from "./Pagination"

const MovieList=(props)=>{ //파라미터 props : 이 컴포넌트에 설정된 속성들을 가진 객체[속성명이 멤버변수명]

    //한페이지에 표시한 영화개수를 저장하는 state 변수
    const [number, setNumber]=useState(9)
    //현재 페이지 번호 저장하는 state 변수
    const [page, setPage]= useState(1)

    return(
        <Container>
            <div className="title">
                <h3>MOVIE LIST</h3>
            </div>

            <div className="info">
                한 페이지에 표시할 영화 개수 : &nbsp;
                <select onChange={(e)=>{setNumber(parseInt(e.target.value))}} value={number}>
                    <option value={9}>9</option>
                    <option value={12}>12</option>
                    <option value={15}>15</option>
                    <option value={20}>20</option>
                    <option value={30}>30</option>
                </select>
            </div>
            {/* 영화 1개씩 표시하기 - 리스트 형태로.. */}
            <div className="movies">
                {
                    props.movies.slice(number*(page-1), number*(page-1)+number).map((movie, index, array)=>{
                        return <Movie movie={movie} key={movie.id}></Movie>

                    })
                }
            </div>

            {/* 페이지네이션 UI */}
            <div className="pagination">
                {/* 여기서 페이지 모양 만들기 짜증.. 별도의 컴포넌트로 분리 */}
                <Pagination total={props.movies.length} number={number} page={page} setPage={setPage}></Pagination>

            </div>
        </Container>
    )
}
export default MovieList

const Container= styled.div`
    .title{padding: 0.5rem 1rem;}
    .info{
        padding: 0.5rem 1rem;

        select{
            padding: 0.5rem 1rem;
            appearance: none;
            font-size: 1rem;
            font-weight: 500;
            border: 1px solid #aaa;
            border-radius: 5px;
        }
    }

    .movies{
        width: 100%;
        margin-top: 1rem;
        /* border: 1px dotted red; //작업 중 가이드 선 */

        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    }

    .pagination{
        margin: 3rem 0;
        text-align: center;
    }
`