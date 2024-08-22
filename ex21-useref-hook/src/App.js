import { useEffect, useRef, useState } from "react"

const App=()=>{

  //ref HOOK을 사용한 요소 참조는 직접 UI변경에 영향을 줄 수 있음.
  const pRef= useRef()
  const inputRef= useRef()
  const imgRef = useRef()
  const changeImage = ()=>{
    const files=inputRef.current.files
    console.log(files) //files:배열 - 파일객체들을 가진 

    const url= URL.createObjectURL(files[0])
    imgRef.current.src= url
  }

  useEffect(()=>{alert()},[])
  const[message, setMessage]=useState('This is message')

  const clickBtn=()=>{
    let result
    const url="/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=%EC%BD%94%EC%8A%A4%ED%94%BC%EC%A7%80%EC%88%98" //코스피 지수 URL encoing
    fetch(url).then(res=>res.text()).then(text=>result=text)
    alert("여기는 언제 실행될까요?:"+result)
    fetch("http?search="+result)
  }

  const clickBtn2=async()=>{
    const url="/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=%EC%BD%94%EC%8A%A4%ED%94%BC%EC%A7%80%EC%88%98"
    const res= await fetch(url)
    const result= await res.text()
    alert("요청 결과 :" + result)
  }

  return(
    <div style={{padding:16,}}>

      {/* (실습1) 텍스트 변경하기 */}
      <p ref={pRef}>Hello world</p>
      <button onClick={()=>pRef.current.innerHTML='nice to meet you'}>change text</button>

      <hr></hr>
      {/* (실습2) 이미지 선택하고 미리보기 구현하기 */}
      <input type="file" ref={inputRef} onChange={changeImage}></input>
      <br></br>
      <img style={{height:225, marginTop:8}} ref={imgRef}></img>

      <hr></hr>
      {/* (실습3) state와 useRef의 차이 */}
      <p>{message}</p>
      <button onClick={()=>{setMessage('It is good')}}>change message</button>

      <hr></hr>

      {/* (추가실습) ES2017에서 새로 추가된 비동기 처리 작업의 편의문법 [async - await]*/}
      <button onClick={clickBtn}>get data from server - 비동기 처리. then promise 이용</button>
      <br></br>
      <br></br>
      <button onClick={clickBtn2}>get data from server - 비동기 처리 async-await 이용</button>

    </div>
  )
}
export default App