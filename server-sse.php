<?php

header("Content-Type: text/event-stream");
header('Cache-Control: no-cache');

require "server-redis.php";

while(1){
    echo "data: ". $redis->get('message') ."\n\n";
    ob_flush();
    flush();
    sleep(5);
}

?>