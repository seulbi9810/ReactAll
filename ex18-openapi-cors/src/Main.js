import React from 'react'

const Main = () => {

    const clickBtn=()=>{

        const client_id='oA1U8uWEQAvyAsB4SP3q'
        const client_secret='DEUU4JTz7g'

        //1) CORS 문제발생 테스트
        fetch('/v1/search/blog.json',{
            method:"GET",
            headers:{
                "X-Naver-Client-Id": client_id,
                "X-Naver-Client-Secret" : client_secret
            }
        }).then(res=>res.text()).then(text=>alert(text)).catch(e=>alert('error:'+e.message))
    }

    const clickBtn2=()=>{
        const query='리액트'  //검색어
        const url="./backend/naver_search.php?query="+query

        fetch(url).then(res=>res.text()).then(text=>alert(text)).catch(e=>alert('error:'+e.message))
    }

  return (
    <div style={{padding:16, }}>

        <h2>OPEN API - CORS</h2>

        {/* (실습1) naver search open api [json parsing] */}
        <button onClick={clickBtn}>naver search open api</button>
        <hr></hr>

        {/* (실습2) 호스팅 서버에서 중계요청해주기 */}
        <button onClick={clickBtn2}>naver search open api - via php dothome server</button>


    </div>
  )
}

export default Main