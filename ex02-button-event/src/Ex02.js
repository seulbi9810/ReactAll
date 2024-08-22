import React, { Component } from "react";


class Ex02 extends Component{

    state= {
        name:"sam",
        age:20,    
        collage: {
            name: "미래대학교",
            majors:["앱개발자", "웹개발자"],
            grade:1,
        },
        graduation: false    
    }
    render(){
        return(
            <div>
            {/* -- 과제 ------------- [화면에 학생의 정보를 보여주는 UI 제작 / 버튼 클릭으로 정보값 변경 ]
            버튼1 : 이름(name) 변경 */}
            <p>이름 : {this.state.name}</p>
            <button onClick={this.changeName}>이름 변경</button>

            {/* 버튼2 : 나이(age) 변경 */}
            <p>나이 : {this.state.age}</p>
            <button onClick={this.changeAge}>나이 변경</button>

            {/* 버튼3 : 대학(collage) 정보 중 이름(name) 변경 */}
            <p>이름 : {this.state.collage.name} </p>
            <button onClick={this.changeCollageName}>대학 이름 변경</button>

            {/* 버튼4 : 대학(collage) 정보 중 복수전공(majors) 변경 */}
            <p>복수전공 : {this.state.collage.majors} </p>
            <button onClick={this.changeCollageMajors}>전공 변경</button>
            
            {/* 버튼5 : 대학(collage) 정보 중 학년(grade) 1 증가 */}
            <p>학년 : {this.state.collage.grade} </p>
            <button onClick={this.changeCollageGrage}>학년 승급</button>
            
            {/* 버튼6 : 졸업여부(graduation) 변경 [토글/체크박스 UI는 아직 배우지 않았기에 버튼으로 true/false 변경] */}
            <p>졸업 : {this.state.graduation.toString()} </p>
            <button onClick={this.changeGraduation}>졸업 여부</button>

            </div>
        )
    }
    changeName= ()=>{
        this.setState({name:'robin'})
    }
    changeAge= ()=>{
        this.setState({age:30})
    }
    changeCollageName= ()=>{
        const {majors,grade}=this.state.collage
        this.setState({collage : {name:'서울대학교', majors, grade}})
    }
    changeCollageMajors= ()=>{
        const {name,grade}=this.state.collage
        this.setState({collage : {name, majors : 'ios',grade}})
    }

    changeCollageGrage= ()=>{
        const {name, majors}=this.state.collage
        this.setState({collage : {name, majors,grade:this.state.collage.grade+1}})
    }

    changeGraduation = () => {
        this.setState(prevState => ({
            graduation: !prevState.graduation
        }));
    }

}

export default Ex02