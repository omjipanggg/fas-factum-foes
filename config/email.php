<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require('../vendor/PHPMailer/src/Exception.php');
require('../vendor/PHPMailer/src/PHPMailer.php');
require('../vendor/PHPMailer/src/SMTP.php');

$mail = new PHPMailer(true);

$name = $_POST["name"];
$email = $_POST["email"];
$message = $_POST["message"];

try {
    $mail->isSMTP();
    $mail->SMTPAuth   = true;
    $mail->Host       = 'sandbox.smtp.mailtrap.io';
    $mail->Username   = 'fab18ad23c74f3';
    $mail->Password   = 'd4b942399cf0c8';
    $mail->Port       = 2525;

    $mail->setFrom($email, $name);
    $mail->addAddress('omjipanggg@gmail.com');

    $mail->isHTML(true);
    $mail->Subject = 'Site is working!';
    $mail->Body    = $message;

    $mail->send();

    echo 'Message sent!';
} catch (Exception $e) {
    echo "Message failed: {$mail->ErrorInfo}";
}
