<?php
header('Access-Control-Allow-Methods: GET, POST');  
include("functions1.php");

if(isset($_POST['deo_id']) && isset($_POST['model']) && isset($_POST['opis'])&& isset($_POST['cena'])){
	
	
$deo_id = $_POST['deo_id'];	
$model = $_POST['model'];
$opis = $_POST['opis'];
$cena = $_POST['cena'];

echo addServis($deo_id, $model, $opis,$cena);
}
?>