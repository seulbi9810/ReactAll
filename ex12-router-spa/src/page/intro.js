import { useNavigate } from "react-router-dom"

const Intro=()=>{

    //페이지 이동 능력을 가진 함수를 가져오기. HOOK 기술로...
    const navigate = useNavigate()

    const goLogin=()=>{
        navigate('/login') //Route에 등록한 path경로..
    }
    const goSignup=()=>{
        navigate('/signup', {state: {name:'sam', age:20}})

    }
    const goSignup2=()=>{
        navigate('/signup')

    }
    const goHome=()=>{
        navigate('/', {replace:true})
    }

    
    return(
        <div>
            <h2>INTRO PAGE</h2>

            <button onClick={goLogin}>로그인 페이지로 이동</button>
            <button onClick={goSignup}>회원가입 페이지로 이동 - state 값 전달</button>
            <button onClick={goSignup2}>회원가입 페이지로 이동 - state 값 전달 안하면</button>

            <button onClick={goHome}>홈으로 돌아가기</button>

        </div>
    )
}
export default Intro