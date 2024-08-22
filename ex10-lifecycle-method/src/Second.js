import {useEffect,useState} from 'react'

//함수형 컴포넌트에서 라이프사이클을 대체하는 HOOK
const Second=()=>{

    //1. 생성자함수 없음.. 그냥 이 컴포넌트가 생성자 함수
    console.log('Second start!!!')

    const [nickname, setNickname] = useState('별명')
    const [email, setEmail] = useState('이메일')
    //2. 화면이 그려진 후 발동하는 라이프사이클 메소드가 필요 - 이때 network 요청 작업을 많이함.
    //이를 위해 탄생함 HOOK -- 오버라이드 아님!! useEffect() -- 무조건 화면이 그려준 후 발동함. 즉, 화면이 갱신되어도 호출됨[DidMount + DidUpdate]
    //effect가 호출될때 실행될 코드를 작성한 함수를 파라미터로 전달하면 됨
    useEffect(function(){
        //이 곳에서 서버작업 수행
        console.log('Second useEffect()!!!')
    },[email]) //두번째 파라미터 : 변경되었을때 useEffect를 발동할 대상 state변수 - 아무 변수도 쓰지 않으면.. 업데이트할때 반응하지 않음

    
    //render()역할을 이 return..
    return(
        <div>
            <h4>functional component</h4>
            <p>닉네임 : {nickname}</p>
            <button onClick={()=>setNickname('oops')}>별명 변경</button>
            <p>이메일 : {email}</p>
            <button onClick={()=>setEmail('aa@aa.com')}>이메일 변경</button>
        </div>
    )
}
export default Second