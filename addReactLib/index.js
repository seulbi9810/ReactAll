// React Component를 붙일 div 요소를 참조하여 가상DOM객체 생성
const domContainer= document.querySelector('#root')
const root= ReactDOM.createRoot(domContainer)

// 브라우저에게 기본 글씨 그리기..
root.render('Hello')
root.render('<h2>Hello</hr>') // textContent로 인식함. [즉, React로 만든 요소만 element로 인식함]

// 버튼 클릭이벤트에 따라 탭 화면 조각을 선택하여 붙여주는 기능 메소드...
function tab1(){
    const e= React.createElement(Main)
    root.render(e)
}

function tab2(){
    const e= React.createElement(Second)
    root.render(e)
}


// 첫번째 탭의 화면부분(android의 Fragment역할 -- 만드는 방식도 비슷[React.Component클래스를 상속받고. render()메소드에서 보여줄 요소를 만들어서 리턴함])
class Main extends React.Component{
    render(){
        return React.createElement('p',{},'TAB #1') //'요소명', 속성객체, 'textContent'
    }
}

//두번째 탭의 화면
class Second extends React.Component{
    render(){
        return React.createElement('button',{onClick : ()=>alert()},'로그인')
    }
}

