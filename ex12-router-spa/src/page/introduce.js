import { useLocation, useSearchParams } from "react-router-dom"

const Introduce=()=>{

    //쿼리 스트링으로 전달된 데이터를 받으려면.. 사용할 HOOK - useLocation()
    const location= useLocation()

    //location은 객체임. 그 안에 url에 관련된 여러 정보를 가진 멤버들이 있음.
    //1. pathname   : ? 뒤 쿼리문을 제외한 경로... /introduce
    //2. search     : ? 를 포함한 쿼리스트링 전체
    //3. key        : location객체의 고유 식별키값
    //4. hash       : 오래전에 사용하던 해시경로.. /intro#sam
    //5. state      : 데이터를 객체or배열로 전달받을 때 사용하는 멤버 속성 - [데이터 전달의 3번재 방법]

    // search에 전달된 데이터는 쿼리문 전체를 하나의 string으로 가지고 있음.
    // 그래서 사용하려면 parsing 해야 함.. 이거 짜증!!
    // 새로이 등장한 HOOK - v6 최신버전에서 등장
    const [searchParams, setSearchParams]= useSearchParams() //state처럼 값이 변경되면 UI 자동갱신

    const changeAddress=()=>{
        searchParams.set('address','newyork')
        setSearchParams(searchParams) //화면 갱신
    }

    const increaseAge=()=>{
        const age= parseInt(searchParams.get('age'))+1
        searchParams.set('age',age)
        setSearchParams(searchParams)
    }

    const decreaseAge=()=>{
        const age= parseInt(searchParams.get('age'))-1
        searchParams.set('age',age)
        setSearchParams(searchParams)
    }

    //location.state 객체를 편하게 사용하기 위해 구조분해할당
    const { nickname, email } = location.state

    return(
        <div>
            <h3>Introduce page</h3>

            <p>pathname : {location.pathname}</p>
            <p>search(쿼리스트링) : {location.search}</p>

            {/* 전달된 데이터 사용 */}
            <p>이름 : {searchParams.get('name')}</p>
            <p>나이 : {searchParams.get('age')}</p>
            <p>주소 : {searchParams.get('address')}</p>

            <button onClick={changeAddress}>change address</button>
            <button onClick={increaseAge}>increase age</button>
            <button onClick={decreaseAge}>decrease age</button>

            {/* state로 전달된 값 출력 */}
            <p>닉네임 : {nickname}</p>
            <p>이메일 : {email}</p>
        </div>
    )
}
export default Introduce