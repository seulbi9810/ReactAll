<?php
    header('Content-Type:text/plain; charset=utf-8');

    // client가 보낸 json은 파일로 받기에 이를 읽어들여야 함
    $jsonData= file_get_contents('php://input');

    echo "요청하신 데이터 : $jsonData \n\n";

    // json parsing ---> associate array
    $data= json_decode($jsonData, true);  //두번째 파라미터 true : 연관배열 변환 여부
    $gender= $data['gender'];
    $fruits= $data['fruits'];
    $brand= $data['brand'];
    $content= $data['content'];

    echo "성별 : $gender \n";
    echo "과일 : $fruits \n";  // 배열을 그냥 출력하면? Array라고 출력됨.
    echo "브랜드 : $brand \n";
    echo "내용 : $content \n";

    

?>