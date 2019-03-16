<?php 
	require_once('config.php');

	if(empty($_POST['username']) || empty($_POST['password']) || empty($_POST['access'])){
		$message = 'Please fill all fields';
	} else {
		$username = $_POST['username'];
        $password = $_POST['password'];
        $access = $_POST['access'];
		$ip = $_SERVER['REMOTE_ADDR'];
		$message = createUser($username, $password, $access, $ip);
	}

	echo json_encode($message);
?>