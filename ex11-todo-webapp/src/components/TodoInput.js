import { IoIosAdd } from "react-icons/io";
import './TodoInput.scss'
import {useState} from 'react'

const TodoInput= (props)=>{ //파라미터로 항목추가기능 함수를 전달 받음

    const [content, setContent]=useState()

    const changeContent=(event)=>{
        setContent(event.target.value)
    }

    const submit=(event)=>{
        event.preventDefault() //서밋에 의한 페이지 전환 기본 동작을 막기!!!

        //전달받은 항목추가 기능 함수를 실행
        props.insertTodo(content)

        //input요소에 써있는 글씨 제거..
        setContent('')
    }
    return(
        //서버에 전송할 내용이 아니어서 form요소 활용. why? Enter 키로도 submit 동작 되기에..
        <form className="todoInput" onSubmit={submit}>
            {/* 1) 입력 영역 */}
            <input type="text" placeholder="할일을 입력하세요" onChange={changeContent} value={content}></input>

            {/* 2)등록 버튼영역 */}
            <button type="submit"><IoIosAdd></IoIosAdd></button>
        </form>
    )
}
export default TodoInput