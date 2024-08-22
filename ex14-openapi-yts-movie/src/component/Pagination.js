import styled from "styled-components"

const Pagination=({total, number, page, setPage})=>{

    const button_count= Math.ceil(total/number)

    // 개수만큼의 배열요소가 필요. 요소값을 1부터...
    const numbers= Array(button_count).fill().map((v,index)=>index+1) //--> 한개일때는 개수로 인식, 2개 이상일때 요소로 인식

    return(
        <PageButtonContainer>
            {/* [1] 이전 버튼 */}
            <PageButton disabled={page==1?'disabled':null} onClick={()=>setPage(page-1)}>&lt;</PageButton>

            {/* [2] 페이지 숫자 버튼들 */}
            {
                numbers.map((num,index)=><PageButton key={index} current={page==num?'page':null} onClick={()=>setPage(num)}>{num}</PageButton>)
            }
            {/* [3] 다음 버튼 */}
            <PageButton disabled={page==button_count?'disabled':null} onClick={()=>setPage(page+1)}>&gt;</PageButton>
        </PageButtonContainer>
    )


}
export default Pagination

const PageButton= styled.button`
    width: 40px;
    height: 40px;
    box-sizing: border-box;
    border-radius: 50%;
    background-color: yellow;
    margin: 0.3rem;
    color: black;
    font-size: 18px;
    font-weight: bold;
    border: none;

    display: flex;
    justify-content: center;
    align-items: center;

    &:hover{
        background-color: orange;
        cursor: pointer;
        transform: translateY(-2px);
    }

    &[current]{
        background-color: white;
        cursor: revert;
    }

    &[disabled]{
        cursor: no-drop;
        transform: revert;
        background-color: white;
        color: black;
    }
`

const PageButtonContainer= styled.div`
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
`