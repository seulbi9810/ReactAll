import { Component } from 'react'
import aaa from './image/newyork.jpg'  //이미지파일을 읽어와서 aaa변수에 import
import paris from './image/paris.jpg'
import sydney from './image/sydney.jpg'

class HomeComponent extends Component{

    // 변수값이 변경되면 화면이 자동갱신되는 Component클래스의 아주 특별한 멤버변수 state(상태값)
    state= {
        image : paris,
        image2 : require('./image/newyork.jpg'),
        image3 : './assets/moana01.jpg',

        images : ['./assets/moana01.jpg','./assets/moana02.jpg','./assets/moana03.jpg','./assets/moana04.jpg','./assets/moana05.jpg'],
        imgIndex : 0,
    }

    render(){
        return (
            <div>
                <h2>React Image</h2>

                {/* (실습1) img요소에 이미지 보여주기 */}

                {/* 리액트에서 이미지를 보여주는 방법은 이미지파일의 저장위치(경로)에 따라 다름 */}
                {/* [1] src폴더안에 이미지를 위치 */}
                {/* 1.1 일단 상대경로를 직접 기입해보기 -- 안보임 */}
                <img src='./image/newyork.jpg' alt='뉴욕 이미지'></img>
                {/* 1.2 이미지파일을 js로 import해오기 (권장) */}
                <img src={aaa} alt='뉴욕 이미지' width={150}></img>
                {/* 1.3 이미지파일을 이미지객체로 만들어 주는 require() 내장함수를 이용 */}
                <img src={ require('./image/newyork.jpg') } alt='뉴욕 이미지' width={150}></img>

                {/* [2] public폴더안에 이미지를 위치 */}
                {/* 상대경로의 기준위치는 index.html이 있는 위치! public폴더 */}
                <img src='./assets/moana01.jpg' alt='모아나' width={150}></img>
                <img src='assets/moana01.jpg' alt='모아나' width={150}></img>
                <img src={'./assets/moana01.jpg'} alt='모아나' width={150}></img>
                {/* 리액트에서 만들어놓은 public폴더 경로를 가진 변수를 이용하기 */}
                <img src={ process.env.PUBLIC_URL + '/assets/moana01.jpg'} alt='모아나' width={150}></img>

                {/* [3] 다른 웹서버에 위치한 이미지파일 */}
                <img src='https://cdn.pixabay.com/photo/2016/03/04/19/36/beach-1236581_1280.jpg' alt='해변 이미지' width={150}></img>

                <hr></hr>

                {/* (실습2) button click으로 이미지를 변경하기 - HTML요소를 찾아와서 제어하는 방식이 아님!! img요소가 보여주는 이미지의 경로를 아주 특별한 변수 state에 저장하고 클릭시에 이 state변수값을 변경 */}
                {/* [1] src폴더에 있는 이미지파일 */}
                <img src={ this.state.image } alt='image' width={150}></img>
                <button onClick={this.changeImage}>이미지 변경</button>

                <img src={ this.state.image2 } alt='image' width={150}></img>
                <button onClick={this.changeImage2}>이미지 변경</button>

                {/* [2] public폴더에 있는 이미지파일 */}
                <img src={ this.state.image3 } alt='image' width={150}></img>
                <button onClick={ ()=>this.setState({image3:'./assets/moana02.jpg'}) }>이미지 변경</button>

                {/* (실습1) img요소를 클릭하여 이미지를 변경- 순차변경 */}
                <img src={ this.state.images[this.state.imgIndex] } alt='이미지' width={150} onClick={this.clickImage} ></img>


            </div>
        )
    }//render method..

    clickImage= ()=>{
        //this.state.imgIndex++;
        let n= this.state.imgIndex + 1
        if(n>4) n=0
        this.setState({ imgIndex: n })
    }

    changeImage2= ()=>{
        this.setState({image2:require('./image/paris.jpg')})
    }

    changeImage= ()=>{
        //컴포넌트의 state값을 변경하는 아주 특별한 멤버 메소드
        this.setState({image:sydney})
    }

}

export default HomeComponent