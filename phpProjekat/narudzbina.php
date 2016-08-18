<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET, POST');
include("config.php");
if(isset($_POST['username']) && isset($_POST['NAZIV']) && isset($_POST['model']) && isset($_POST['opis'])
	&& isset($_POST['cena'])){
$username = $_POST['username'];
$NAZIV = ($_POST['NAZIV']);
$model = ($_POST['model']);
$opis = ($_POST['opis']);
$cena = ($_POST['cena']);
$stmt = $conn->prepare("INSERT INTO korpa (username, NAZIV, model , opis, cena) VALUES (?, ?, ?, ?, ?)");
$stmt->bind_param("ssssi", $username, $NAZIV, $model , $opis, $cena);
$stmt->execute();
echo "ok";
}
?>
