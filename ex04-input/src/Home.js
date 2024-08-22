import React, {Component} from 'react'

class Home extends Component{

    state= {
        text:'',
        text2: '',
    }

    inputText=''

    title=''
    message=''

    //요소 참조변수
    inputRef= React.createRef() //참조변수 .. null인 상태
    pRef= React.createRef()

    render(){
        return (
            <div>
                <h2>input value control</h2>

                {/* (실습1) input요소의 글씨가 변경될때 마다 반응하기 */}
                <input type='text' onChange={this.chageText}></input>
                <hr></hr>

                {/* (실습2) input요소의 글씨가 변경될때마다 화면에 표시하기*/}
                <input onChange={this.changeText2}></input>
                <p>입력된 글씨 : {this.state.text}</p>
                <hr></hr>

                {/* (실습3) 대부분의 경우 버튼클릭할 때 input요소의 값을 보여줌. */}
                {/*       - input값이 변경될때 마다의 값을 저장하는 일반변수, 버튼클릭할 때 그 값을 state변수에 설정하여 p요소가 보여주도록.. */}
                <input onChange={this.changeText3}></input>
                <button onClick={this.clickBtn}>입력완료</button>
                <p>입력완료한 글씨 : {this.state.text2}</p>
                <hr></hr>

                {/* (실습4) input값은 보통은 서버에 전송됨.  html 요소중에 서버에 데이터를 보내주는 요소 form */}
                <h4>form 다루기 - action속성사용(권장하지 않음)</h4>
                <form action='./backend/aaa.php' method='get'>
                    <input placeholder='제목' name='title'></input>
                    <input placeholder='내용' name='msg'></input>
                    <input type='submit' value='전송'></input>
                </form>
                {/* form요소의 action을 사용하면.. 실제 웹의 URL이 변경되는 것임 */}
                {/* 리액트의 특징은 SPA.. 즉, 오직 index.html 하나만 보여주는 것임.. */}
                {/* 그래서 화면이 새로만들어지는 form의  action속성은 리액트에서 거의 사용하지 않음. */}
                
                {/* (실습5) 리액트에서 form 다루는 방법 -- 맛보기 */}
                <hr></hr>
                <h4>리액트에서 form 다루기</h4>
                {/* action속성을 사용하지 않음. 그래도 화면이 현재페이지로 새로고침됨. */}
                {/* 즉, form요소안에 있는 type='submit' 버튼을 클릭하면 무조건 페이지가 변경되는 것임 */}
                {/* 리액트를 이것을 막고..직접 JS로 서버에 Http통신을 해야 함. */}
                {/* 그래서 form요소가 submit되는 이벤트를 캐치하여 직접 작업해야 함 */}
                <form method='get' onSubmit={this.submitForm}>
                    <input placeholder='제목' name='title' onChange={(event)=>this.title=event.target.value}></input>
                    <input placeholder='내용' name='msg' onChange={ event=> this.message= event.target.value } ></input>

                    <input type='submit'></input>                    
                </form>

                <hr></hr>
                {/* (실습6) 경우에 따라서는 요소를 참조하여 값을 사용하고 싶을 수 도 있음..그래서 등장..Ref라는 녀석..참조변수.. 2개만들기 */}
                <h4>요소 제어하기</h4>
                <input placeholder='이메일을 입력하세요' type='email' ref={this.inputRef}></input>
                <button onClick={this.clickBtn2}>확인</button>
                <p ref={this.pRef}>입력한 이메일 정보 : </p>

            </div>        

        )
    }

    clickBtn2= ()=>{
        let a= this.inputRef.current.value
        this.pRef.current.innerHTML= a
    }


    submitForm= (event)=>{  //파라미터 event : 이벤트 정보를 가진 객체
        //기본적인 submit이벤트의 동작인 페이지전환을 하지 말라고 ..막기!!
        event.preventDefault()

        //입력값들을 서버에 전송...이건 추후 form수업에서 소개.
        //단, 서버로 보낼 값..받아보기..
        alert( this.title +" , " + this.message )

        //JS 서버에 HTTP 통신 [ajax 기술] -- 현재 동작 안함. 서버작업 안함. 추후 수업에서.
        const xhr= new XMLHttpRequest()
        xhr.onreadystatechange= function(){
            if(xhr.readyState==4 && xhr.status==200) alert(xhr.responseText)
        }
        xhr.open('GET', './backend/aaa.php')
        xhr.send()

    }


    changeText3= (event)=> this.inputText= event.target.value
    clickBtn= ()=> this.setState({ text2 : this.inputText })



    changeText2= (event)=>{
        this.setState({text: event.target.value})
    }

    // 이벤트 콜백으로 지정된 함수는 기본적으로 Event정보를 가진 객체를 파라미터로 전달 받음
    chageText= (event)=>{
        // 브라우저의 개발자도구(F12)에서 [콘솔]에 로그로 출력하기
        //console.log('on change..')
        // 이벤트를 발생시킨 input요소(event.target)의 value 값 로그로 출력하기
        console.log( event.target.value )
    }

}

export default Home