import { useDispatch, useSelector } from "react-redux"
import { changeAddress, changeEmailAction, changeNicknameAction, decreaseLevelAction, increaseLevelAction } from "../redux/account"
import {useState} from 'react'

const Info=()=>{

    const account= useSelector(state=>state.accountReducer.account)
    const dispatch= useDispatch()

    const [address, setAddress]=useState('')
    const clickBtn=()=>{
        dispatch(changeAddress(address))

        setAddress('')
    }

    return(
        <div>
            <h4>This is Info component</h4>

            {/* HOOK으로 store의 account정보 보여주기 */}
            <p>nickname : {account.nickname}</p>
            <p>level : {account.level}</p>
            <p>email : {account.email}</p>
            <p>address : {account.address}</p>

            <button onClick={()=>dispatch(changeNicknameAction)}>뉴진스로 별명 변경</button>
            <button onClick={()=>dispatch(increaseLevelAction)}>회원등급 상승</button>
            <button onClick={()=>dispatch(decreaseLevelAction)}>회원등급 하락</button>
            <button onClick={()=>dispatch(changeEmailAction)}>bb@bb.com으로 이메일 변경</button>
            <button onClick={()=>dispatch({type:'changeEmail',email:'cc@cc.com'})}>cc@cc.com으로 이메일 변경</button>

            <button onClick={()=>dispatch(changeAddress('busan'))}>주소 변경</button>
            <button onClick={()=>dispatch(changeAddress('incheon'))}>주소 변경</button>

            <hr></hr>
            <input onChange={(event)=>setAddress(event.target.value)} value={address} ></input>
            <button onClick={clickBtn}>입력된 주소로 변경</button>
            
        </div>
    )
}
export default Info