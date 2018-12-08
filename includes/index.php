<?php
include 'data.php';

//single movie route

if(isset($_GET['movies'])) {
    $data = get_one_video($conn, $_GET['movies']);
    echo json_encode($data);
} else{
    $data = get_all_videos($conn);
    echo json_encode($data);
}

?>