import './TodoContainer.scss'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import {useState} from 'react'

const TodoContainer= ()=>{

    //[작업 4] - 할일 데이터들 -- 배열
    const [todos, setTodos] = useState([
        {no:1, content:'리액트 기초문법 학습', isDone:true},
        {no:2, content:'리액트 스타일링 학습', isDone:true},
        {no:3, content:'리액트 컴포넌트 학습', isDone:false},
        {no:4, content:'리액트 웹앱 학습', isDone:false},
    ]) 

    //할일 데이터를 추가하는 작업 함수
    const insertTodo=(content)=>{
        //state 배열에 새로운 항목 추가하기..

        //새로 추가될 항목 객체
        const todo={
            no: todos.length+1,
            content: content,
            isDone: false,
        }

        //기존 todos 배열에 새로운 todo 객체를 추가 -- 원본 배열을 건드리지 않는 방법 권장
        const aa= todos.concat(todo)
        
        //state 배열변수의 값을 변경
        setTodos(aa)
 
    }

    //항목 삭제 기능 메소드
    const deleteTodo=(no)=>{
        //항목의 no번호와 같은 것만 빼고 새로운 배열을 리턴하기..filter()
        const aa= todos.filter((todo, index)=>{
            return todo.no != no
        })

        setTodos(aa)

    }

    //항목의 isDone을 변경하는 기능 메소드
    const toggleDone=(index)=>{
        //todos[index].isDone= !todos[index].isDone
        //기존 배열이 아닌 새로운 배열로 변경해야 UI 갱신
        const aa= [...todos]
        aa[index].isDone= !aa[index].isDone
        
        setTodos(aa)
    }

    return(
        <div className='todoContainer'>
            {/* 1. 타이틀 영역 */}
            <div className='app-title'>TODO LIST</div>

            {/* 2. 사용자 입력 영역 */}
            <TodoInput insertTodo={insertTodo}></TodoInput>

            {/* 3. 할일목록 리스트 영역 */}
            <TodoList todos={todos} deleteTodo={deleteTodo} toggleDone={toggleDone}></TodoList>

        </div>
    )
}
export default TodoContainer