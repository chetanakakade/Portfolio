<?php
if(isset($_POST['submit'])){
	
	$name=$_POST['name'];
	$email=$_POST['email'];
	$message=$_POST['message'];
	
	$to='chetu.kakade@gmail.com';
	$subject='Portfolio Form Submission';
	$msg="Name:".$name."\n"."Wrote the following message:"."\n\n".$message;
	$header="From:".$email;
	
    if(mail($to,$subject,$msg,$header)){
		echo "<h1> Form submitted Successfully. Thank You!</h1>";
	}
	else{
		echo "Something went wrong!";
	
	}
}

?>