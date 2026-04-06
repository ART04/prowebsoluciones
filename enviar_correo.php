<?php
// Asegúrate de que no haya salida previa
ob_start();

// Recibe los datos del formulario
$name = $_POST['name'];
$email = $_POST['email'];
$number = $_POST['number'];
$message = $_POST['message'];

// Configura los detalles del correo electrónico
$to = 'contacto@prowebsoluciones.org'; 
$to .= ', aceri.art@gmail.com'; // Dirección de correo electrónico del destinatario
$subject = 'Mensaje del cliente'; // Asunto del correo electrónico
$body = "Nombre: $name\nEmail: $email\nTeléfono: $number\nMensaje: $message"; // Contenido del correo electrónico
$headers = "From: $email\r\n";
$headers .= "Reply-To: $email\r\n";

// Envía el correo electrónico
$mailSent = mail($to, $subject, $body, $headers);

// Asegúrate de que el navegador interprete la salida como HTML
header("Content-Type: text/html; charset=UTF-8");

// Genera el script de SweetAlert
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Procesando...</title>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
</head>
<body>
<script>
<?php if ($mailSent): ?>
    Swal.fire({
        title: '¡Éxito!',
        text: 'El correo electrónico se ha enviado correctamente.',
        icon: 'success',
        confirmButtonText: 'Aceptar'
    }).then(() => {
        window.location.href = '/'; // Cambia '/' por la URL de tu página
    });
<?php else: ?>
    Swal.fire({
        title: 'Error',
        text: 'Hubo un error al enviar el correo electrónico.',
        icon: 'error',
        confirmButtonText: 'Aceptar'
    }).then(() => {
        window.location.href = '/'; // Cambia '/' por la URL de tu página
    });
<?php endif; ?>
</script>
</body>
</html>
<?php
ob_end_flush();
