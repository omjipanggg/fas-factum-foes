<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require '../assets/vendor/PHPMailer/src/Exception.php';
require '../assets/vendor/PHPMailer/src/PHPMailer.php';
require '../assets/vendor/PHPMailer/src/SMTP.php';

$mail = new PHPMailer(true);

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

try {

    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth   = true;
    $mail->Username = 'omjipanggg@gmail.com';
    $mail->Password = 'acic mruj dvil wxww';
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->CharSet = 'UTF-8';
    $mail->Port = 465;

    $mail->SMTPDebug = 2;
    $mail->Debugoutput = 'html';
    
    $mail->setFrom('omjipanggg@gmail.com', 'Maulana Ajie Pamungkas');
    $mail->addAddress('omjipanggg@gmail.com');
    $mail->addReplyTo($email, $name);

    $mail->isHTML(true);
    $mail->Subject = "New Submission from $name";

    $mail->Body = "
        <p><strong>Name:</strong> {$name}</p>
        <p><strong>Email address:</strong> {$email}</p>
        <p><strong>Message:</strong><br>{$message}</p>
    ";

    $mail->send();

    // echo 'Message sent successfully!';

} catch (Exception $e) {
    echo "Message failed: {$mail->ErrorInfo}";
}