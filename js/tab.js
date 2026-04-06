// Función para cambiar de pestaña en el tab
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
  // Mostrar la primera sección por defecto al cargar la página
  document.getElementById("Seccion1").style.display = "block";



  

  
  
  // Obtener todas las pestañas del tab
var tabButtons = document.querySelectorAll('.tablinks');
var tabContents = document.querySelectorAll('.tabcontent');

// Establecer el índice inicial
var currentIndex = 0;

// Función para activar la pestaña actual
function activateTab(index) {
  // Desactivar todas las pestañas y ocultar los contenidos
  tabButtons.forEach(function(button) {
    button.classList.remove('active');
  });
  tabContents.forEach(function(content) {
    content.style.display = 'none';
  });

  // Activar la pestaña actual y mostrar el contenido correspondiente
  tabButtons[index].classList.add('active');
  tabContents[index].style.display = 'block';
}

// Función para avanzar al siguiente índice
function nextTab() {
  currentIndex++;
  if (currentIndex >= tabButtons.length) {
    currentIndex = 0; // Volver al primer índice si se llega al final
  }
  activateTab(currentIndex);
}

// Establecer un intervalo para cambiar automáticamente las pestañas
var interval = setInterval(nextTab, 3000); // Cambiar cada 3 segundos (ajusta el valor según tus necesidades)



window.addEventListener('DOMContentLoaded', function() {
  // Obtener el primer botón de pestaña
  var firstTabButton = document.querySelector('.tablinks:first-child');
  
  // Simular un clic en el primer botón de pestaña
  firstTabButton.click();
});

  
