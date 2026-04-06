// Obtener el botón por su ID
const openPageBtn = document.getElementById("openPageBtn");

// Verifica que el botón exista antes de agregar el evento
if (openPageBtn) {
	openPageBtn.addEventListener("click", function () {
		// Redirige a la página modal.html
		window.location.href = "modal.html";
	});
} else {
	console.log("El botón no se encuentra en la página.");
}
