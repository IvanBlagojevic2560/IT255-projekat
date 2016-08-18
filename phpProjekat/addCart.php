<?php
header('Access-Control-Allow-Methods: GET');  
include("functions1.php");

if(isset($_GET['deo_id'])){
	$id = intval($_GET['deo_id']);
	echo addCart($id);
}


?>