<?php
require "predis/autoload.php";

Predis\Autoloader::register();

try {
		$redis = new Predis\Client(array(
		    "scheme" => "tcp",
		    "host" => "127.0.0.1",
		    "port" => "6379"
		));
}
catch (Exception $e) {
	die($e->getMessage());
}
?>