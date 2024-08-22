import { useParams } from "react-router-dom"

const Third=()=>{

    //'third/:aa' 라는 서브경로의 변수명 aa 자리에 전달된 데이터를 받기 위한 HOOK - useParams
    const params= useParams()

    return(
        <div>
            <h3>Third page</h3>

            {/* :aa 경로명에서 aa가 params객체의 멤버속싱이 되어 전달되어 옴 */}
            <p>Hello {params.aa}</p>
        </div>
    )
}
export default Third