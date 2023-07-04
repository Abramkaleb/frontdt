<?php
require_once('config.php');

try {
  // RETRIEVE DATA
  $cnt = Antares::getInstance()->get($DEVICE_URI); // TODO: Change this to your device uri
	$la = $cnt->getLatestContentInstace();
	$obj = json_decode($la->con);
} catch (Exception $e) {
  echo($e->getMessage());
}

$table = 'config';
$query = $conn->query("SELECT servo FROM $table");
$data = mysqli_fetch_array($query);

?>