<?php 

    require_once('../admin/scripts/config.php');

    $access = "";


    if (isset($_GET['media'])) {
        $type = $_GET['media'];

        if ($type == "video") {
            $tbl = "tbl_movies";
            $access = $_GET['access'];
        } else {
            $tbl = "tbl_audio";
            $access = 6;
        }
        if ($type == "tv") {
            $tbl = "tbl_tv";
            $access = 6;
        }
    }else{
        $access = $_GET['access'];
    }


    if(isset($_GET['filter'])){

        $tbl = 'tbl_movies';
        $tbl2 = 'tbl_genre';
        $tbl3 = 'tbl_mov_genre';
        $col = 'movies_id';
        $col2 = 'genre_id';
        $col3 = 'genre_name';
        $filter = $_GET['filter'];

        $results = filterResults($tbl, $tbl2, $tbl3, $col, $col2, $col3, $filter, $access);
        
        echo json_encode($results);

    } else {

        $results = getAll($tbl, $access);

        echo json_encode($results);
    }
?>