<?php
header("Access-Control-Allow-Origin: *");

require 'server-redis.php';

  if(isset($_POST['data']))  {
    $value = $_POST['data']."\n";
    $redis->set('message', $value);
    $redis->expire('message', 10);
}

?>
