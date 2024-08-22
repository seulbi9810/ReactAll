<?php
    header('Content-Type:text/plain; charset=utf-8');

    //(1) 전송된 파일데이터는 임시저장소로 가고.. 이 php에는 파일정보를 가진 송장만 전달됨
    $file=$_FILES['img'];

    $fileName= $file['name'];
    $fileSize= $file['size'];
    $fileType= $file['type'];
    $tempName= $file['tmp_name'];

    echo "$fileName \n";
    echo "$fileSize \n";
    echo "$fileType \n";
    echo "$tempName \n";

    $dstName= 'IMG' . date('YmdHis') . $fileName;
    move_uploaded_file($tempName,$dstName);
?>