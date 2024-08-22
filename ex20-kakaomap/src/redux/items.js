//리덕스 주요 용어
//1. store   : 전역 state 저장공간
//2. state   : 상태값 - 데이터를 저장할 변수
//3. action  : state의 값을 어떻게 하고싶은지에 대한 이름을 가진 객체
//4. reducer : 기존 state와 action객체를 받아서 action에 종류(type)에 따라 state를 변경하여 새로운 state를 리턴해주는 함수

//1) 초기 state
const initState= {
    items : [
        {no:1, title:'mrhi', memo:'this is mirea campus', photos:[], date:'2024.05.27', position:{lat:37.56, lng:127.034}},
        {no:2, title:'Hello', memo:'nice to meet you', photos:[], date:'2024.05.28', position:{lat:37.5619, lng:127.03457}},
    ],
}

//2) action
export const setItemsAction= (items)=>{
    return {type:'item/setItems', items:items}
}
export const addItemAction= (item)=>{ return {type:'item/addItem', item}}
export const removeItemAction= (item)=>{return {type:'item/removeItem', item}}

//3) reducer
export default function itemsReducer(state= initState, action){
    switch(action.type){
        case 'item/setItems':
            return { ...state, items: action.items }
        case 'item/addItem':
            return { ...state, items: state.items.concat(action.item) }
        case 'item/removeItem':
            return { ...state, items: state.items.filter((e)=>{return e.no != action.item.no}) }
        default:
            return state
    }
}

