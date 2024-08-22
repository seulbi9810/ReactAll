import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { RingLoader } from 'react-spinners'
import styled from "styled-components"

const MovieDetail = () => {
    const [details, setDetails] = useState(null) //초기값 없음
    const [loading, setLoading] = useState(true) // loading 상태

    //url parameter 받기 ... 서브경로 [/movie/:id]... 이때 :id가 변수명
    const params = useParams()

    useEffect(() => {
        const url = `https://yts.mx/api/v2/movie_details.json?movie_id=${params.id}&with_images=true&with_cast=true`
        fetch(url)
            .then(res => res.json())
            .then(json => {
                setDetails(json.data.movie)
                setLoading(false)
            })
            .catch(e => {
                alert(e.message)
                setLoading(false)
            })
    }, [params.id])

    if (loading) {
        return (
            <div>
                <h2>MOVIE DETAIL</h2>
                <p>영화 고유 식별자 id : {params.id}</p>
                <RingLoader />
            </div>
        )
    }

    return (
        <First>
            <h2>MOVIE DETAIL</h2>
            <p className="name">영화 고유 식별자 id : {params.id}</p>
            {details ? (
                <div>
                    <h3>{details.title}</h3>
                    <p className="bb">개봉 : {details.year}</p>
                    <p className="bb">평점 : {details.rating}</p>
                    <p className="bb">런닝타임 : {details.runtime}</p>
                    <p className="bb">좋아요 : {details.like_count}</p>
                    <div className="aa">
                        <img className="aa" src={details.large_screenshot_image1}alt="스샷1"></img>
                        <img className="aa" src={details.large_screenshot_image2}alt="스샷2"></img>
                        <img className="aa" src={details.large_screenshot_image3}alt="스샷3"></img>
                    </div>
                    <p>{details.description_full}</p>
                   
                    {/* 추가적인 영화 정보를 여기에 표시하세요 */}
                </div>
            ) : (
                <p>영화 정보를 가져올 수 없습니다.</p>
            )}
        </First>
    )
}

export default MovieDetail

const First= styled.div`
    width: 80%;
    height: 100%;
    text-align: center;
    border: 1px solid red;
    justify-content: center;
    align-items: center;

    .name{
        margin-bottom:2rem;
        display: inline-block;
        justify-content: space-between;

    }
    .bb{
        margin:2rem;
        display: inline-block;
        justify-content: space-between;
    }


    .aa{
        justify-content: center;
        align-items: center;
        overflow: scroll;
        width: 50%;
    }
    
`