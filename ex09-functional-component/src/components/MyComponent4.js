import {useState} from 'react'

export default function MyComponent4(){

    //여기는 지역변수..
    //state변수를 만들어주는 HOOK 메소드.. useState()
    let message = useState('Hello world')//message라는 변수를 state변수로 만들어 줌. 초기값은 파라미터로.. 

    function changeMessage(){
        message= "Nice to meet you"
        alert(message)

        //setState()같은 함수가 있어야 화면갱신 됨!!
    }

    //(실습2) useState()를 사용할때는 state변수와 setState()메소드까지 만들어 줘야 함.
    // useState()는 state용 변수와 그 값을 변경하는 setState()용 메소드를 한번에 배열로 리턴해 줌. 이를 분해할당받기
    let [title, setTitle]= useState('Hello react')

    const changeTitle=()=>{
        // useState() 같은 기능의 메소드
        setTitle('very good hook')
    }

    return(
        <div style={{border:'2px solid black', padding:8, margin:4}}>

            <h4>함수형 컴포넌트에서 state 사용 실습</h4>

            {/* 리액트는 data binding 기법을 사용함 */}
            {/* 요소를 제어하지 않고.. 요소가 보여주는 값을 저장한 변수를 제어하는 기법 */}
            {/* 변수 중에서 화면 UI가 자동 갱신되는 아주 특별한 Component클래스의 멤버변수 state.. 이 값을 변경해주는 아주 특별한 메소드 setState() */}
            {/* 문제는 함수형컴포넌트는 Component클래스를 상속하지 않았기에.. state라는 특별한 변수가 없음. 그래서 함수형 컴포넌트를 stateless component라고 불렀었음 */}
            {/* (실습1)리액트가 버전업이 되면서.. 함수형 컴포넌트에서도 클래스형에서 사용하던 기술들을 적용하고 싶어서 등장한 기법.. HOOK 기법 */}
            <p>{message}</p>
            <button onClick={changeMessage}>change message</button>

            <hr></hr>
            {/* (실습2) state를 사용하려면..setState()메소드의 역할까지 같이 사용해야함 */}
            <p>{title}</p>
            <button onClick={changeTitle}>change title</button>

        </div>
    )
}