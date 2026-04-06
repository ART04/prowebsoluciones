<?php
// Archivo PHP para manejar el contador de visitas
$archivoContador = "contador.txt";

// Si el archivo no existe, crearlo con un valor inicial de 1500
if (!file_exists($archivoContador)) {
    file_put_contents($archivoContador, "4502");
}

// Leer el número de visitas actual desde el archivo
$contador = (int)file_get_contents($archivoContador);

// Incrementar el contador
$contador++;

// Guardar el nuevo valor en el archivo
file_put_contents($archivoContador, $contador);

// Devolver el contador como respuesta
echo $contador;
?>


