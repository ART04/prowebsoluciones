<?php
// Configurar los encabezados para permitir solicitudes desde cualquier origen (si es necesario)
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Content-Type: application/json');

// Leer el cuerpo de la solicitud
$input = json_decode(file_get_contents('php://input'), true);

if (isset($input['email'])) {
    $email = filter_var($input['email'], FILTER_SANITIZE_EMAIL);

    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $to = "contacto@prowebsoluciones.org";
        $subject = "Nueva suscripción al boletín";
        $message = "Se ha suscrito un nuevo correo electrónico: $email";
        $headers = "From: no-reply@tu-dominio.com\r\n" .
                   "Reply-To: no-reply@tu-dominio.com\r\n" .
                   "X-Mailer: PHP/" . phpversion();

        if (mail($to, $subject, $message, $headers)) {
            echo json_encode(["message" => "Correo enviado con éxito."]);
        } else {
            echo json_encode(["message" => "Error al enviar el correo."]);
        }
    } else {
        echo json_encode(["message" => "Correo electrónico no válido."]);
    }
} else {
    echo json_encode(["message" => "No se proporcionó ningún correo electrónico."]);
}
?>
