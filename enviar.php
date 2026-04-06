<?php


require 'phpmailer/PHPMailer.php';
require 'phpmailer/Exception.php';

use PHPMailer\PHPMailer\PHPMailer;


$email = $_POST['email'];
$name = $_POST['name'];
$number = $_POST['number'];
$asunto = $_POST['asunto'];
$message = $_POST['message'];

//para probar que el correo este en funcion post
//echo  $email .' '. $name .' '. $number .' '.$message;





if( empty(trim($name)) ) $name = 'anonimo';
if( empty(trim($email)) ) $number = '';

$body = <<<HTML
    <h1>Contacto desde la web</h1>
    <p>De: $name $number / $email</p>
    <h2>Mensaje</h2>
    $message
HTML;

$mailer = new PHPMailer();
$mailer->setFrom( $email, "$name $number" );
$mailer->addAddress('contacto@prowebsoluciones.org','Sitio web');
$mailer->addCC('aceri.art@gmail.com','Gmail');
$mailer->Subject = "Mensaje web: $asunto";
$mailer->msgHTML($body);
$mailer->AltBody = strip_tags($body);
$mailer->CharSet = 'UTF-8';



//if( $foto['size'] > 0 ){
 //   $mailer->addAttachment( $foto['tmp_name'], $foto['name'] );
//}
 $rta = $mailer->send( );

//var_dump($rta);
echo "<script>alert('correo enviado exitosamente en breve nos comunicaremos contigo')</script>";
echo "<script> setTimeout(\"location.href='index.html'\",1000)</script>";

?>
