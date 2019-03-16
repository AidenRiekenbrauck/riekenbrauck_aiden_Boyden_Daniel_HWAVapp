<?php

    // function createUser($username, $password, $access, $ip){

    //     require_once('connect.php');

    //     //check if username exists
    //     $check_exist_query = "SELECT COUNT(*) FROM tbl_user WHERE user_name = :username";
    //     $user_set = $pdo->prepare($check_exist_query);
    //     $user_set->execute(
    //         array(
    //             ':username' => $username
    //         )
    //     );

    //     if ($user_set->fetchColumn() = 0) {
            
    //         $create_user_query = "INSERT INTO tbl_user (user_name, user_pass, user_access, user_ip) VALUES (:username, :password, :access, :ip);";
    //         $create_user_set = $pdo->prepare($create_user_query);
    //         $create_user_set->execute(
    //             array(
    //               ":username" => $username,
    //               ":password" => $password,
    //               ":access" => $access,
    //               ":ip" => $ip
    //             )
    //         );

    //     }

    // }

?>