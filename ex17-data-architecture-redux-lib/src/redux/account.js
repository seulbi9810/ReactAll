//(1)
const initState={
    account:{
        nickname:'oops',
        level:1,
        email:'aa@aa.com',
        address:'seoul'
    }
}

//(2)
export const changeNicknameAction={type:'changeNickname'}
export const increaseLevelAction={type:'account/increase'}
export const decreaseLevelAction={type:'account/decrease'}
export const changeEmailAction={type:'changeEmail', email:'bb@bb.com'}

//액션객체를 생성해서 리턴해주는 함수
export const changeAddress=(address)=>{
    return {type:'changeAddress', address: address}
}

//(3)
export default function accountReducer(state=initState, action){
    switch(action.type){
        case 'changeNickname':
            const aaa={...state.account, nickname:'newjeans'}
            return{...state, account: aaa }
        case 'account/increase':
            return{...state,account:{...state.account,level:state.account.level+1}}
        case 'account/decrease':
            return{...state,account:{...state.account,level:state.account.level-1}}
        case 'changeEmail':
            return{...state,account:{...state.account, email:action.email}}
        case 'changeAddress':
            return{...state,account:{...state.account, address:action.address}}    

        default:
            return state                
    }


}