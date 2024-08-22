<?php
    header('Content-Type:text/plain; charset=utf-8');

    //글씨로 보내진 데이터
    $nickname= $_POST['nickname'];
    echo "닉네임 : $nickname \n\n";
    
    //전송된 파일들은 임시저장소로.. 송장만 받음
    $files= $_FILES['imgs'];

    //여러개의 파일을 보냈기에 파일개수만큼 반복하여 파일정보를 응답!~!!
    $file_num= count($files['name']);
    for($i=0; $i<$file_num; $i++){
        $fileName= $files['name'][$i];
        $fileSize= $files['size'][$i];
        $fileType= $files['type'][$i];
        $tempName= $files['tmp_name'][$i];
    }

    echo "$fileName \n";
    echo "$fileSize \n";
    echo "$fileType \n";
    echo "$tempName \n";
    echo "-------------\n";

    $dstName= 'IMG' . date('YmdHis') . $fileName;
    move_uploaded_file($tempName,$dstName);


?>