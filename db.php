<?php
$serverName = 'localhost';
$userName ='jason';
$password ='123456';
$dbName = 'bitcoin_facts';

// Create connection

$con = mysqli_connect($serverName, $userName, $password, $dbName);
if(mysqli_connect_errno($con) ){
  echo "Failed to connect";
  exit();
}
echo "Connection Success!";

