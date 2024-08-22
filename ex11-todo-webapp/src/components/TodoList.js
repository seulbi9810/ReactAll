import TodoItem from "./TodoItem"
import './TodoList.scss'

//속성으로 전달받은 값을 파라미터로 받음
const TodoList=(props)=>{
    return(
        <div className="todoList">
            {/* 항목들 요소가 나열 */}
            {
                //대량의 데이터를 JSX 요소들로 변환...
                props.todos.map((todo, index)=>{
                    return <TodoItem todo={todo} key={index} deleteTodo={props.deleteTodo} toggleDone={props.toggleDone} index={index} ></TodoItem>
                })
            }
        </div>
    )

}
export default TodoList