<?php

$frm_name  = "Промышленные полы";
$recepient = "shumlianskiia@gmail.com";
$sitename  = "Промышленные полы";
$subject   = "Новая заявка с сайта \"$sitename\"";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$email = trim($_POST["mail"]);
$formname = trim($_POST["formname"]);

$message = "
Имя клиента: $name <br>
Телефон клиента: $phone <br>
E-mail клиента: $email
";

mail($recepient, $subject, $message, "From: $frm_name <$email>" . "\r\n" . "Reply-To: $email" . "\r\n" . "X-Mailer: PHP/" . phpversion() . "\r\n" . "Content-type: text/html; charset=\"utf-8\"");
