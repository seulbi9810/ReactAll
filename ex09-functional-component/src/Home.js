import {Component, Fragment} from 'react'
import MyComponent2 from './components/MyComponent2'
import MyComponent3 from './components/MyComponent3'
import MyComponent4 from './components/MyComponent4'
import MyComponent5 from './components/MyComponent5'
import MyComponent6 from './components/MyComponent6'

export default class Home extends Component{

    //(실습1 [1]) 변수가 JSX객체를 저장할 수 있음
    aa=<h4>This is Heading element</h4>

    //(실습1 [2]) 함수의 리턴에 JSX객체를 주면..
    display(){
        return <h4>This is element via return of display function</h4>
    }

    render(){
        return(
            <Fragment>

                {/* Custom component를 만들때. class형 컴포넌트로 만들면 기본 코드가 조금 많아요. 짜증 */}
                {/* 그래서 등장함 함수형 컴포넌트(functional component) */}

                {/* 이를 실습하기 전에.. 별도의 커스텀 컴포넌트 없이 JSX요소를 보여주는 구성요소에 대한 이해 */}
                {/* [1] 이전시간에 소개했던.. 변수에 JSX을 저장하고 변수명만 작성하면 값이 출력되어 요소가 보여짐 */}
                {this.aa}
                {/* [2] 함수를 호출하여 리턴된 값 보여주기 */}
                {this.display()}

                {/* 위 구조를 생각해보면.. 결국 함수를 호출하면 함수의 리턴값이 보여지고 그 값이 JSX면 요소가 만들어짐 */}
                {/* 그렇다면..함수단위로 화면의 구성요소를 만들면 언제든 재사용 가능!! */}

                {/* (실습2) 함수형 컴포넌트를 만들기 - 일반 함수만드는 방법과 똑같음 */}
                {MyComponent()} {/* 이렇게 사용하면.. 그냥 함수호출같으니 */}
                {/* 마치. custom component를 사용하듯이 태그문으로.. 기능호출이 가능함 */}
                <MyComponent></MyComponent>
                <MyComponent></MyComponent>

                {/* (실습3) 별도의 .js에 함수형 컴포넌트를 만들어서 사용도 가능함 */}
                <MyComponent2></MyComponent2>
                <MyComponent2></MyComponent2>

                {/* (실습4) 재사용하기는 편함. 단, 매번 같은 값이 보여지면 짜증 - 컴포넌트를 사용하면서 속성(property)으로 값을 전달할 수 있음 */}
                <MyComponent3 aaa='sam'></MyComponent3>
                <MyComponent3 aaa='robin'></MyComponent3>
                <MyComponent3></MyComponent3>
                <MyComponent3 type='search' placeholder='검색'></MyComponent3>

                {/* (실습5) 함수형 컴포넌트안에서 UI 변경에 영향을 주는 상태값인 state 사용에 대한 실습 */}
                <MyComponent4></MyComponent4>

                {/* (실습6) 익명함수 or 화살표함수로 함수형컴포넌트 만들 수 있음*/}
                <MyComponent5></MyComponent5>
                <MyComponent6 data='aaa'></MyComponent6>
                <MyComponent6 data='bbb'></MyComponent6>
                

            </Fragment>
        )
    }
}//Home class...

function MyComponent(){
    return <p>This is functional MyComponent</p>
}

