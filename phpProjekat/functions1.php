<?php
include("config.php");



function getServisi(){
	global $conn;
	$rarray = array();
	
		$result = $conn->query("SELECT * FROM proizvodi");
		$num_rows = $result->num_rows;
		$servisi = array();
		if($num_rows > 0)
		{
			$result2 = $conn->query("SELECT * FROM proizvodi");
			while($row = $result2->fetch_assoc()) {
				$row['DEO_NAZIV'] = getDeloviById($row['DEO_ID']); 
				array_push($servisi,$row);
			}
		}
		$rarray['servisi'] = $servisi;
		return json_encode($rarray);
	
}
function addServis($deo_id, $model, $opis,$cena){
	global $conn;
	$rarray = array();
	
			$stmt = $conn->prepare("INSERT INTO proizvodi (DEO_ID, model, opis,cena) VALUES (?, ?, ?,?)");
			$stmt->bind_param("isss", $deo_id, $model, $opis, $cena);
			if($stmt->execute()){
				$rarray['success'] = "ok";
			}else{
				$rarray['error'] = "Database connection error";
			}
			return json_encode($rarray);
		
}


function getDelovi(){
	global $conn;
	$rarray = array();
	
		$result = $conn->query("SELECT * FROM DEO");
		$num_rows = $result->num_rows;
		$delovi = array();
		if($num_rows > 0)
		{
			$result2 = $conn->query("SELECT * FROM DEO");
			while($row = $result2->fetch_assoc()) {
				array_push($delovi,$row);
			}
		}
		$rarray['delovi'] = $delovi;
		return json_encode($rarray);
	
}
function deleteServis($id){  
	global $conn;  
	$rarray = array();  
	if (checkIfLoggedInAdmin()) {  
		$result = $conn->prepare("DELETE FROM proizvodi WHERE proizvodi_ID=?");   
		$result->bind_param("i",$id);   
		$result->execute();   
		$rarray['success'] = "Deleted successfully";  
}
	return json_encode($rarray); 
}
function getDeloviById($id){
	global $conn;
	$rarray = array();
	$id = intval($id);
	$result = $conn->query("SELECT * FROM DEO WHERE ID=".$id);
	$num_rows = $result->num_rows;
	$rowtoreturn = array();
	if($num_rows > 0)
	{
		$result2 = $conn->query("SELECT * FROM DEO WHERE ID=".$id);
		while($row = $result2->fetch_assoc()) {
			$rowtoreturn = $row;
		}
	}
	return $rowtoreturn['NAZIV'];
}
function getProizvodById($id){
	global $conn;
	$rarray = array();
	$id = intval($id);
	$result = $conn->query("SELECT * FROM proizvodi WHERE proizvodi_ID=".$id);
	$num_rows = $result->num_rows;
	$rowtoreturn = array();
	if($num_rows > 0)
	{
		$result2 = $conn->query("SELECT * FROM proizvodi WHERE proizvodi_ID=".$id);
		while($row = $result2->fetch_assoc()) {
			$rowtoreturn = $row;
		}
	}
	return $rowtoreturn['NAZIV'];
}
function addCart($deo_ID){
	global $conn;
	$rarray = array();
	$errors = "";
	
				$stmt = $conn->prepare("INSERT INTO korpa (deo_ID) VALUES (?)");
				$stmt->bind_param("s", $deo_ID);
				if($stmt->execute()){
					$rarray['success'] = "ok";
				}else{
					$rarray['error'] = "Database connection error";
				}
				return json_encode($rarray);
		
}





?>