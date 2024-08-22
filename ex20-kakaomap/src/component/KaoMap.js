import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

//window최상위 객체안에 등록된 kakao map api를 뽑아서 사용해야 함
const {kakao}= window




//카카오 개발자 사이트에서 카카오 MAP API 튜토리얼 따라하기
const KaoMap = (props) => {

    const items= useSelector(state=> state.itemsReducer.items)


    //화면이 그려진 후 발동하는 라이프사이클 역할의 HOOK
    useEffect(()=>{

        const container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스

        const options = { //지도를 생성할 때 필요한 기본 옵션
            center: new kakao.maps.LatLng(37.56, 127.034), //지도의 중심좌표.
            level: 3 //지도의 레벨(확대, 축소 정도)
        };
        
        let map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

        //alert(items.length)

        //items 개수만틈 마커를 만들어 지도에 표시
        for(const item of items){
            const latlng= new kakao.maps.LatLng(item.position.lat, item.position.lng) // 마커 표시 좌표

            //마커객체 만들기
            const marker= new kakao.maps.Marker({
                position:latlng,
                title: item.title //마커에 마우스를 올리면 보이는 글씨
                //마커이미지
            })

            //지도에 마커를 표시하기
            marker.setMap(map)

            //마커 클릭 리스너..
            kakao.maps.event.addListener(marker,'click',()=>{alert(item.title+"\n"+item.memo)})
        }

        //지도를 클릭했을때 반응하기.. 원래 Bottomsheet로 사용자 입력폼을 구성하여 새로운 item 추가..
        kakao.maps.event.addListener(map,'click', (mouseEvent)=>{
            //클릭한 위도, 경도 정보를 가져오기
            var latlng= mouseEvent.latLng
            //alert(latlng.getLat()+","+latlng.getLng())

            //새로 추가한 item객체 생성하는 작업을 하는 Main 컴포넌트의 메소드를 대신 호출
            props.addItems(latlng.getLat(),latlng.getLng())

        })


    },[items])
    

    return (
        //카카오지도가 그려질 영역
        <div id="map" style={{width:'100%', height:'100vh'}}>

        </div>
    )
}

export default KaoMap