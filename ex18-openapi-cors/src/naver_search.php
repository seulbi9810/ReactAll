<?php
    header('Content-Type:application/json, charset=utf-8');

    //GET 방식으로 전달된 검색어 query
    $query= $_GET['query'];

    //php에서 다른 서버에 HTTP Request를 수행하는 curl 라이브러리

    $encQuery= urlencode($query);
    $url="https://openapi.naver.com/v1/search/blog.json?query" .$encQuery;

    //1. curl 작업 시작 - 초기화
    $ch= curl_init();

    //2. curl 옵션 설정
    curl_setopt($ch, CURLOPT_URL, $url);    //2.1 접속 url
    curl_setopt($ch, CURLOPT_POST, false);  //2.2 post 방식인지 여부
    curl_setopt($ch, CURLOPT_RETURNTRANSFER,true);  //2.3 응답결과를 되돌려 받을 것인지 여부
    
    //2.4 헤더 정보 - naver search api에 접속할 때 필요한 인증값
    $client_id="oA1U8uWEQAvyAsB4SP3q";
    $client_secret="DEUU4JTz7g";

    $hearders=array();
    $headers[] = "X-Naver-Client-Id: ".$client_id;
    $headers[] = "X-Naver-Client-Secret: ".$client_secret;
    curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

    curl_setopt($ch, CURLOPT_POSTFIELDS, $post_data);

    //3.curl 작업 시작
    $response= curl_exec($ch);
    echo $response;

    //4. curl닫기
    curl_close($ch);


?>