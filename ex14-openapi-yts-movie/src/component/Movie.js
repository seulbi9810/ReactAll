import { useNavigate } from "react-router-dom"
import styled from "styled-components"

const Movie=({movie})=>{

    //페이지 전환을 해주는 기능함수를 제공하는 HOOK
    const navigate= useNavigate()

    const goMovieDetail=()=>{
        navigate('/movie/'+movie.id)
    }

    return(
        <Card onClick={goMovieDetail}>
            <div className="title">{movie.title}</div>
            <div className="poster"><img src={movie.large_cover_image} alt="poster"></img></div>
            <div className="year">{movie.year}년도 개봉작</div>
            <div className="rating"><span>{movie.rating}</span>점</div>
            <div className="genres">{movie.genres.join(', ')}</div>
        </Card>
    )
}
export default Movie

const Card= styled.div`
    //카드모양 스타일
    width: 300px;
    box-sizing: border-box;
    background-color: white;
    color: black;
    margin: 1rem .5rem;
    border-radius: 8px;
    border: 1px solid black;
    font-size: 12px;
    padding: 1rem;

    .title{
        font-weight: bold;
        font: 24px;
        height: 3rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .poster img{
        width: 70%;
        border-radius: 8px;
        margin-bottom: 1rem;
        
    }

    .year{
        padding: 0.5rem;
    }

    .rating{
        padding: 0.5rem;
        
        span{
            font-weight: bold;
            color: blue;
        }
    }

    .genres{
        padding: 0.5rem;
    }

    &:hover{
        cursor: pointer;
        transform: scale(1.05,1.05); //변환
        background-color: lemonchiffon;
    }
    transition: transform .5s, background-color .5s; //전환효과
`   