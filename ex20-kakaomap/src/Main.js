import { useDispatch, useSelector } from "react-redux"
import KaoMap from "./component/KaoMap"
import { addItemAction } from "./redux/items"

const Main= ()=>{

    const items= useSelector( state=> state.itemsReducer.items )
    const dispatch= useDispatch()

    const addItems= (latitude, longitude)=>{

        //새로 추가할 아이템 객체
        const item= {
            no: items.length+1,
            title:'NEW',
            memo:'이제 그만...',
            photos:[],
            date:'2024.05.29',
            position:{lat: latitude, lng: longitude}
        }

        // 전역 저장소의 state를 변경해달라는 액션을 리듀서에 보내기!! 그럼 자동으로 items state가 변경됨
        dispatch( addItemAction(item) )        
    }

    return (
        <div>
            {/* [1] 카카오 지도 보여주는 컴포넌트 */}
            <KaoMap addItems={ addItems }></KaoMap>
        </div>
    )
}
export default Main