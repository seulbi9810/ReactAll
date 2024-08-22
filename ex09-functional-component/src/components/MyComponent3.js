export default function MyComponent3(props){ //파라미터 props : 전달받은 속성값들을 모두 가진 객체

    // const type=props.type
    // const placeholder=props.placeholder
    // 구조분해할당
    const {type, placeholder, aaa}=props
    return(
        <div>
            {/* 클래스형 컴포넌트에는 전달받은 속성을 저장하는 아주 특별한 멤버변수 props가 있지만.. 함수형에는 없음 */}
            {/* 함수형 컴포넌트가 속성을 전달 받는 방법은... 파라미터로 받음 [this.키워드 없음]*/}
            <span>Hello {props.aaa}</span>

            <input type={props.type} placeholder={props.placeholder} style={{marginLeft:'1rem', padding:'.5rem'}}></input>
        
            {/* 매번 props. 을 쓰는게 짜증.. 그래서 구조분해할당으로 적용하기 */}
            <input type={type} placeholder={placeholder} value={aaa}></input>

        </div>
    )
}