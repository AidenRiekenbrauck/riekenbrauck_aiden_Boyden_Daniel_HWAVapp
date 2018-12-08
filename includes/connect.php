<?php
$user = "root";
$pw = "root";

try {
    $conn = new PDO('mysql:host=localhost;dbname=db_movie', $user, $pw);
    // var_dump($conn);
}catch(PDOException $exception){
    echo 'connect error' . $exception->getMessage();
}

//PDO is a universal adapter takes in a driver which is the db language (sql)
//PDO will known what it needs todo to connect to the database


?>