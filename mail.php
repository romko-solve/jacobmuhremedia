<?php

$frm_name  = "flight High";
$recepient = "info@flighthigh.ru";
$sitename  = "flighthigh.ru";
$subject   = trim($_POST["subject"]);

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$text = trim($_POST["message"]);

if ($name != "") {$message = $message . "Имя: $name <br>";}
if ($phone != "") {$message = $message . "Телефон: $phone <br>";}
if ($text != "") {$message = $message . "Сообщение: $text <br>";}

$domain = $_SERVER['SERVER_NAME'] . dirname($_SERVER['REQUEST_URI']);
$sourcePath = $_FILES['file']['tmp_name'];       // Storing source path of the file in a variable
$targetPath = "uploads/".$_FILES['file']['name']; // Target path where file is to be stored
move_uploaded_file($sourcePath,$targetPath) ;    // Moving Uploaded file

if ($sourcePath != "") {$message = $message . "<img src='$domain/$targetPath'>";}

mail($recepient, $subject, $message, "From: $frm_name" . "\r\n" . "Reply-To: $email" . "\r\n" . "X-Mailer: PHP/" . phpversion() . "\r\n" . "Content-type: text/html; charset=\"utf-8\"");
