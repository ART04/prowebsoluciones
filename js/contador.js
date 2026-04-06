// script.js
document.addEventListener('DOMContentLoaded', function () {
    // Valor inicial del contador
    let contador = 2000;
    
    // Obtiene el elemento del contador
    const contadorElemento = document.getElementById('contador');
    
    // Obtiene el valor almacenado en localStorage (si existe)
    const valorLocalStorage = localStorage.getItem('contador');
    
    // Si hay un valor en el almacenamiento local, lo usamos como valor inicial
    if (valorLocalStorage !== null) {
        contador = parseInt(valorLocalStorage);
    }
    
    // Incrementa el contador en 1
    contador++;
    
    // Actualiza el elemento HTML con el nuevo valor del contador
    contadorElemento.textContent = contador;
    
    // Almacena el nuevo valor en localStorage
    localStorage.setItem('contador', contador.toString());
  });
  