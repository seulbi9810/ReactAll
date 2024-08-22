import { useRef, useState } from 'react'

const Main= ()=>{

    //(실습1)
    //input 요소의 값을 저장하는 변수
    const [title, setTitle]= useState('') 
    const [message, setMessage]= useState('')

    const changeTitle= (event)=>{
        setTitle(event.target.value) //event.target : 이벤트를 발생한 요소        
    }

    const changeMessage= (event)=>{
        setMessage(event.target.value)
    }

    const submitGet= (event)=>{ //이벤트의 정보를 가진 객체
        //form의 submit 이벤트의 기본 새로고침 동작을 막아야함
        event.preventDefault()     
        
        //서버에 보낼 데이터 title, message

        //JS의 기본 내장 생성자 함수 XMLHttpRequest
        const xhr= new XMLHttpRequest()
        xhr.onreadystatechange= ()=>{
            if(xhr.readyState==4 && xhr.status==200){
                alert('응답결과 : ' + xhr.responseText)
            }            
        }

        //서버프로그램의 경로는 상대경로임. 즉 이 웹앱의 업로드된 곳을 기준으로 경로를 지정
        xhr.open('GET','./backend/aaa.php?title='+title+'&msg='+message)
        xhr.send()
    }

    //(실습2 [1]) 라디오버튼의 선택값 저장 state 변수
    const [gender, setGender] = useState('female')

    //(실습2 [2]) 체크박스의 선택값들 저장 state 변수
    const [fruits, setFruits] = useState([])

    const changeCheckbox= (value)=>{
        if(fruits.includes(value)){ // 이미 있으니..제거
            const aa= fruits.filter( (v)=>{return v!=value} )
            setFruits(aa)

        }else{ //없으니 추가
            const aa= fruits.concat(value)
            setFruits(aa)
        }
    }

    //(실습2 [3]) 콤보박스..의 선택값 저장 변수
    const [brand, setBrand]= useState('기아')


    //(실스2 [4]) textarea의 값 저장 변수
    const [content, setContent]= useState('')

    const clickBtn= ()=>{
        alert( gender + "\n" + fruits +"\n"+ brand + "\n" + content)
    }

    //(실습3) post method 작업
    const submitPost= (event)=>{
        event.preventDefault()

        //서버로 보낼 데이터 -- key=value방식 짜증.. json으로 한방에..
        const data= JSON.stringify({
            gender: gender,
            fruits: fruits,
            brand,    //속성명과 값을 가진 변수명이 같다면..그냥 변수명만 써도 됨
            content   // == content:content
        })

        //JS에서 Http 통신을 해주는 내장 함수 : fetch() 
        fetch('./backend/bbb.php',{
            method:'POST',
            headers: {
                "Content-Type":'application/json'
            },
            body: data
        })
        .then( (response)=>{ return response.text() } )
        .then( (text)=> alert('응답결과:' +text) )
        .catch( (error)=> alert('에러 : ' + error))        
    }



    //(실습4) File 제출 버튼 콜백 메소드
    const [file, setFile]= useState() //초기값 null
    const changeFile= (event)=>{
        //이벤트를 발동한 input요소의 value값을 알아보기
        //alert(event.target.value) //실제 경로가 아님.. 이 정보로는 서버에 파일 전송 못함.

        //type인 file인 input요소의 파일정보객체를 얻어오는 속성값
        const files= event.target.files
        //files는 배열임. 여러개 파일이 선택될 수도 있어서

        //여기는 1개만 선택가능하니..그 정보만 state에 저장하기
        setFile(files[0])
    }    

    const submitFile= (event)=>{
        event.preventDefault()

        //JS로 파일전송하려면..파일객체가 필요함..   onChange로 취득한 파일정보객체 state값을 확인해보기     
        //alert( file.name +"\n" +file.type +"\n"+file.size )

        //POST방식으로 서버에 파일 보내기..

        //파일을 서버로 보내기위해 택배박스객체로 만들기 - FormData
        const data= new FormData()
        data.append('img', file) // 식별자 'img', File객체

        fetch('./backend/ccc.php',{
            method:'POST',
            body: data            
        })
        .then(res=>res.text()).then(text=>alert(text)).catch(e=>alert(e.message))
    }

    //(실습5) 선택된 사진 미리보기 작업
    const changeFiles= (event)=>{
        const files= event.target.files

        //파일정보들을 미리보기로 보여주려면.. File객체에 무지개로드 연결하여 파일데이터를 읽어와야함
        //즉, 파일읽기 기능이 필요함. -- 파일이 여러개 이므로 반복문..으로..
        const urls= [] //빈 배열
        for( const file of files ){
            const fr= new FileReader()
            fr.onload= ()=>{
                urls.push(fr.result)
                if(urls.length==files.length) setImageUrls(urls)
            }
            fr.readAsDataURL(file)
        }
            
    }

    //파일리더로 읽어들인 파일의 URL정보를 저장할 state변수
    const [imageUrls, setImageUrls]= useState([])

    //요소를 참조하여 값을 얻어오는 방법.. useRef HOOK 기술
    const nicknameRef= useRef(null)  //참조변수
    const fileInputRef= useRef(null) //참조변수

    const submitData=(event)=>{
        event.preventDefault()

        //요소를 참조하는 참조변수를 이용하여 입력값들 얻어오기
        const nickname= nicknameRef.current.value
        const files= fileInputRef.current.files

        //서버로 보내기 위해.. 택배상자 만들기 [글씨데이터와 파일을 하나의 박스에 포장]
        const data= new FormData()
        data.append('nickname',nickname) //글씨 데이터

        for(const file of files){
            data.append('imgs[]',file) //php 백엔드에서 배열을 받을때는 []식별자 필요
        }
        fetch('./backend/ddd.php',{
            method:'POST',
            body:data
        })
        .then(res=>res.text()).then(text=>alert(text)).catch(e=>alert(e.message))
    }

    return (
        <div style={{padding:16}}>
            <h1>REACT FORM CONTROL</h1>

            {/* (실습5) File 여러개 선택과 미리보기 + 글씨 데이터까지 서버에 전송 */}
            <form onSubmit={submitData}>
                <input placeholder='닉네임' ref={nicknameRef}></input>
                <br></br>
                <input type='file' ref={fileInputRef} multiple accept='image/*' onChange={changeFiles}></input>

                <p>선택된 이미지의 개수 : { imageUrls.length }</p>
                <div style={{borderTop:'2px solid black', borderBottom:'2px solid black', padding:8}}>
                    {
                        imageUrls.map((value, index)=>{
                            return <img src={value} key={index} style={{width:'20%', margin:4, border:'1px solid black'}}></img>
                        })
                    }
                </div>

                <br></br>
                <button type='submit'>데이터 전송</button>
            </form>

            <hr></hr>

            {/* (실습4) File 선택 및 전송 TEST */}
            <form onSubmit={submitFile}>
                <input type='file' onChange={changeFile}></input>
                <input type='submit'></input>
            </form>

            <hr></hr>

            {/* (실습3) POST방식으로 위 4개의 값 보내기 */}
            <form onSubmit={submitPost}>
                <button type='submit'>아래 4개의 입력값 서버로 보내기</button>
            </form>

            <hr></hr>

            {/* (실습2) 다양한 input type의 값 얻어오기 실습 */}
            <h4>다양한 input type의 value 값을 state변수에 저장하기</h4>

            {/* [4] 여러줄 입력요소 */}
            <div>
                CONTENT : <textarea placeholder='content' onChange={(event)=>setContent(event.target.value)} value={content}></textarea>
            </div>

            <br></br>

            {/* [3] select 콤보박스 요소 */}
            <div>
                자동차 브랜드 선택 : &nbsp;
                <select value={brand} onChange={(event)=>setBrand(event.target.value)}>
                    <option value='현대'>현대</option>
                    <option value='기아'>기아</option>
                    <option value='KGM'>KGM</option>
                </select>
            </div>

            <br></br>

            {/* [2] 체크박스 버튼 */}
            <div>
                FRUITS : 
                <label><input type='checkbox' checked={ fruits.includes('apple') } onChange={()=>changeCheckbox('apple')}></input>사과</label>
                <label><input type='checkbox' checked={ fruits.includes('orange') } onChange={()=>changeCheckbox('orange')}></input>오렌지</label>
                <label><input type='checkbox' checked={ fruits.includes('banana') } onChange={()=>changeCheckbox('banana')}></input>바나나</label>
            </div>
            <br></br>

            {/* [1] 라디오 버튼 */}
            <div>
                GENDER :                 
                <label><input type='radio' checked={gender=='female'} onChange={()=>setGender('female')}></input>여성</label>
                <label><input type='radio' checked={gender=='male'} onChange={()=>setGender('male')}></input>남성</label>
            </div>

            <br></br>
            <button onClick={clickBtn}>입력값 확인</button>

            <hr></hr>

            {/* (실습1) GET 방식으로 간단하게 서버에 데이터를 보내고 응답받기 */}
            <h4>GET method test</h4>
            <form onSubmit={submitGet}>
                <input placeholder='title' onChange={changeTitle}></input>
                <input placeholder='message' onChange={changeMessage}></input>

                <input type='submit'></input>
            </form>
        </div>
    )
}
export default Main
